import { createContext, useState } from "react";
import { API } from "../config";
import { useNavigate } from "react-router";

export const pageContext = createContext("");

const AppContextProvider = ({children})=>{
  const [theme, setTheme] = useState("#FDFDFD");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  async function fetchData(page = 1, tag = null, category = null) {
    setLoading(true);
    let url = `${API}get-blogs?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPage(page);
      setTotalPages(data?.totalPages);
      setPosts(data?.posts);
      setLoading(false);
    } catch {
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }
  }


  const handlePageChange=(page)=>{
    navigate({search:`?page=${page}`});
    setPage(page);
  }


  const value = {
    page,
    setPage,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    posts,
    setPosts,
    theme,
    setTheme,
    fetchData,
    handlePageChange
  };

  return <pageContext.Provider value={value}>{children}</pageContext.Provider>;
}

export default AppContextProvider; 