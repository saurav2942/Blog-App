import React, { useContext, useEffect, useState } from 'react'
import RTBlogs from '../components/RTBlogs';
import { useNavigate, useParams } from 'react-router';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { pageContext } from '../utils/context';


const Blog = ({ data }) => {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <p className="font-bold text-lg">{data?.title}</p>
      <p className="text-sm my-1">
        By <span className="italic">{data?.author}</span> on{" "}
        <Link to={`../categories/${data?.category}`}>
          <span className="font-semibold underline cursor-pointer">
            {data?.category}
          </span>
        </Link>
      </p>
      <p className="text-sm">Posted On {data?.date}</p>
      <p className="mt-4 mb-2">{data?.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {data?.tags.map((e, index) => (
          <Link to={`../tags/${e}`} key={index}>
            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
              #{e}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};



const BlogPage = () => {
  const {theme} = useContext(pageContext); 
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${params.blogId}`;
  
  async function fetchData(){
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data?.blog);
      setBlogs(data?.relatedBlogs); 
    }
    catch{
      console.log("Error in Fetching Data!");
      setBlog(null);
      setBlogs([]);
    }
  }
  
  
  useEffect(()=>{
    fetchData();
    return ()=>{
      setBlog(null);
      setBlogs([]);
    }
  },[]);

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          background: theme,
          color: theme === "#FDFDFD" ? "#23272F" : "#FDFDFD",
        }}
      >
        <div className="flex flex-col gap-y-3 my-4">
          {!blog ? (
            <Loader />
          ) : (
            <>
              <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
                <button
                  className="border-2 border-gray-300 py-1 px-4 rounded-md"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
              <Blog data={blog} />
              {blogs.length === 0 ? (
                <h1 className="font-bold text-2xl mx-auto">
                  No Related Posts Found
                </h1>
              ) : (
                <RTBlogs blogs={blogs} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogPage


