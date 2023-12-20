import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { pageContext } from '../utils/context';

const Header = () => {
  const { theme, setTheme } = useContext(pageContext);
  function handleClick() {
    if (theme === "#FDFDFD") {
      setTheme("#23272F");
    } else {
      setTheme("#FDFDFD");
    }
  }


  return (
    <header
      className="flex justify-center items-center py-4 gap-x-10 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0"
      style={{
        background: theme,
        color: theme === "#FDFDFD" ? "#23272F" : "#FDFDFD",
      }}
    >
      <h1 className="font-bold text-3xl uppercase text-center">
        Blogs On New Technologies
      </h1>
      <div className="cursor-pointer" onClick={() => handleClick()}>
        {theme === "#23272F" ? (
          <IoSunnyOutline className="text-[#FDFDFD] text-2xl" />
        ) : (
          <FaMoon className="text-2xl text-[#23272F]" />
        )}
      </div>
    </header>
  );
}

export default Header