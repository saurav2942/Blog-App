import React, { useContext} from 'react'
import Blog from './Blog';
import { pageContext } from '../utils/context';
import Loader from './Loader';

const Body = () => {
  const {loading, posts, theme} = useContext(pageContext);

  return (
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
  );
}

export default Body