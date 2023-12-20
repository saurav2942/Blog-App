import React from 'react'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router'

const TagPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <p className="font-bold text-xl">
          Blogs Tagged{" "}
          <span className="underline text-blue-700">#{params.tag}</span>
        </p>
      </div>
      <Tag />
      <Footer />
    </>
  );
}

export default TagPage