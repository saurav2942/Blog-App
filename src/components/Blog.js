import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({data}) => {

  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <Link to={`blog/${data?.id}`}>
        <p className="font-bold text-lg">{data?.title}</p>
      </Link>
      <p className="text-sm my-1">
        By <span className="italic">{data?.author}</span> on{" "}
        <Link to={`categories/${data?.category}`}>
          <span className="font-semibold underline cursor-pointer">
            {data?.category}
          </span>
        </Link>
      </p>
      <p className="text-sm">Posted On {data?.date}</p>
      <p className="mt-4 mb-2">{data?.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {data?.tags.map((e, index) => (
          <Link to={`tags/${e}`} key={index}>
            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
              #{e}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog