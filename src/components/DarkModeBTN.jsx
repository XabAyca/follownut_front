// CONFIG IMPORTS
import { useContext } from "react";

// CONTEXTS IMPORTS
import DarkMode from "./context/darkMode";


const DarkModeBtn = () => {
  const { isDark, toogleMode } = useContext(DarkMode);

  return (
    <div className="toggleWrapper" id="whateveriwant">
      <input
        type="checkbox"
        className=""
        id="checkbox"
        checked={isDark ? true : false}
        onChange={toogleMode}
      />
      <label htmlFor="checkbox" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}

export default DarkModeBtn;