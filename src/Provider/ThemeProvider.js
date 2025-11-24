import React, { createContext, useState } from "react";

export const Theme = createContext();
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <Theme.Provider value={{ isDark, setIsDark }}>{children}</Theme.Provider>
  );
}

export default ThemeProvider;
