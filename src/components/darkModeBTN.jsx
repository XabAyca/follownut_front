import React, { useContext } from 'react';
import DarkMode from '../components/context/darkMode';

const ModeBtn = () => {
  const { isDark, toogleMode } = useContext(DarkMode);

  return (
    <span className={isDark?'mode-btn dark' : 'mode-btn'} onClick={toogleMode}>
      <span className={isDark?"grey-btn dark":"grey-btn"}></span>
      <div className='logo-mode'>
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </div>
    </span>
  );
};

export default ModeBtn;