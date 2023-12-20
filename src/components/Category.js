import React, { useContext } from 'react'
import Footer from './Footer';
import { pageContext } from '../utils/context';
import Loader from './Loader';
import { Link } from 'react-router-dom';


const Blog = ({ data }) => {


  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <Link to={`../blog/${data?.id}`}>
        <p className="font-bold text-lg">{data?.title}</p>
      </Link>
      <p className="text-sm my-1">
        By <span className="italic">{data?.author}</span> on{" "}
        <span className="font-semibold underline cursor-pointer">
          {data?.category}
        </span>
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



const Category = () => {
  const { loading, posts, theme } = useContext(pageContext);

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          background: theme,
          color: theme === "#FDFDFD" ? "#23272F" : "#FDFDFD",
        }}
      >
        <div className="flex flex-col gap-y-10 my-4">
          {loading ? (
            <Loader />
          ) : posts.length === 0 ? (
            <h1 className="font-bold text-2xl mx-auto">No Posts Found</h1>
          ) : (
            posts.map((e) => <Blog data={e} key={e.id} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category