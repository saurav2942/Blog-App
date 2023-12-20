import React, { useContext} from 'react'
import { pageContext } from '../utils/context';

const Footer = () => {
  const {handlePageChange, page, totalPages, theme } = useContext(pageContext);

  return (
    <div
      className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300"
      style={{
        background: theme,
        color: theme === "#FDFDFD" ? "#23272F" : "#FDFDFD",
      }}
    >
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page >= 2 && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Footer