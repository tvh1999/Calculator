"use client";
import React from "react";

interface ThemeTypes {
  themePreset: string;
  settingNewThemeFnc: (theme: string) => void;
}

export const ThemeContext = React.createContext({
  themePreset: "1",
  settingNewThemeFnc: (theme: string) => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreset, setThemePreset] = React.useState("1");

  const settingNewThemeFnc = (theme: string): void => setThemePreset(theme);
  const value = React.useMemo(() => {
    return { themePreset, settingNewThemeFnc };
  }, [themePreset]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
