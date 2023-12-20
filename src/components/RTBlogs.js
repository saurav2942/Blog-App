import React from 'react'
import Blog from './Blog';

const RTBlogs = ({blogs}) => {
  return (
    <>
      <div>
        <h1 className="max-w-2xl mx-auto mt-5 font-bold text-3xl mb-5">
          Related Blogs
        </h1>
      </div>
      {blogs.map((e)=> <Blog key = {e.id} data={e}/>)}
    </>
  );
}

export default RTBlogs