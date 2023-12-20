import React, { useContext, useEffect} from 'react'
import {pageContext} from './utils/context'
import {Route, Routes, useLocation} from 'react-router'
import { useSearchParams } from 'react-router-dom'
import Home from './components/Home'
import MainPage from './routes/MainPage'
import TagPage from './routes/TagPage'
import BlogPage from './routes/BlogPage'
import CategoryPage from './routes/CategoryPage'

const App = () => {
 const {fetchData} = useContext(pageContext);
 const location = useLocation();
 const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
   if(location.pathname.includes("blog")) return;
   console.log("location",location);
   console.log("page", searchParams.get("page"));
   const page = searchParams.get("page")??1;
   if (location.pathname.includes("tag")) {
     const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
     fetchData(Number(page), tag);
   } else if (location.pathname.includes("categories")) {
     const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
     fetchData(Number(page), null, category);
   } else {
     fetchData(Number(page));
   }
 }, [location.pathname, location.search]);

 
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index={true} element={<MainPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App