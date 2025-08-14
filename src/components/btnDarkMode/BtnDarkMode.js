import { useEffect } from "react";
import { useLocalStorage } from "../../components/utils/useLocalStorage";
import "./style.css";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import detectDarkMode from "../../components/utils/detectDarkMode";

const BtnDarkMode = () => {
  const [darkMode, setDarkModde] = useLocalStorage(
    "darkMode",
    detectDarkMode()
  );

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkModde(newColorScheme);
      });
  }, [setDarkModde]);

  const toggleDarkMode = () => {
    setDarkModde((prevMode) => {
      return prevMode === "light" ? "dark" : "light";
    });
  };

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn--active dark-mode-btn';

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
