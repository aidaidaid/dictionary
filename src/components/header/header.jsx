import { useEffect, useState } from "react";
import logo from "./../../images/logo.svg" ;
import './header.css';

export const Header = () => {

  const [mode, setMode] = useState('day');

  useEffect(() => {
    if (mode === 'night') {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === 'day' ? 'night' : 'day');
  }

  return (
    <header>
        <img src={logo} className="logo" alt="logo" />
        <label className="switch">
            <input type="checkbox"
              onChange={toggleMode}
          />
            <span className="slider"></span>
        </label>
    </header>
  );
};