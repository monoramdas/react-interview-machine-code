import { useContext } from "react";
import { Theme } from "./Provider/ThemeProvider";
import "./styles.css";

export default function App() {
  const { isDark, setIsDark } = useContext(Theme);
  const handleThemeChange = () => {
    setIsDark((prev) => {
      const updated = !prev;
      document?.documentElement.setAttribute(
        "data-theme",
        updated ? "dark" : "light"
      );
      return updated;
    });
  };
  return (
    <>
      <div className="App">Theme</div>

      <label className="switch">
        <input type="checkbox" onChange={handleThemeChange} checked={isDark} />
        <span className="slider" />
      </label>
    </>
  );
}
