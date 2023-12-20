import React, { useContext } from 'react'
import { pageContext } from '../utils/context';
import Header from './Header';
import { Outlet } from 'react-router';

const Home = () => {
  const {theme} = useContext(pageContext);
  return (
    <div
      className="py-[100px]"
      style={{
        background: theme,
        color: theme === "#FDFDFD" ? "#23272F" : "#FDFDFD",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Home