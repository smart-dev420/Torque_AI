import React, { createContext, useState, ReactNode } from "react";
import { lightTheme, darkTheme } from "./theme";

type ThemeType = typeof lightTheme;

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme: ThemeType) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme.background, color: theme.color }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
