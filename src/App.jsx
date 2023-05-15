import SubmitPage from "./components/SubmitPage";
import GetGraphData from "./components/BarChart";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";

export const ThemeContext = createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <ThemeContext.Provider value={{ isDarkMode, handleThemeChange }}>
        <Routes>
          <Route path="/" element={<SubmitPage />} />
          <Route path="/submit" element={<GetGraphData />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
