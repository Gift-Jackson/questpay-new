import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("purple"); // Default primary color


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const selectTheme = (color) => {
    setPrimaryColor(color);
  };
 
  useEffect(() => {
    document.body.className = `${darkMode ? "dark" : "light"} ${primaryColor}`;
  }, [darkMode, primaryColor]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, selectTheme, primaryColor, }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
