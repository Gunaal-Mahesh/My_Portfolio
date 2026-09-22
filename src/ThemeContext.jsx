import { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Theme.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);