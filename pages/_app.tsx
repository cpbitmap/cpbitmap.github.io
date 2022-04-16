/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/global.css";

import { ThemeProvider } from "@primer/react";
import type { AppProps } from "next/app";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  colorMode: string;
  setColorMode: (mode: string) => void;
}>({} as any);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorMode, setColorMode] = useState("");

  // Runs once on initial render. Gets the color mode from the HTML element.
  useEffect(() => {
    const initialColorMode =
      document.documentElement.getAttribute("color-mode");
    setColorMode(initialColorMode === "dark" ? "dark" : "light");
  }, []);

  // Runs each time colorMode is updated. Update the HTML element and store
  // the new value in local storage
  useEffect(() => {
    if (colorMode !== "") {
      document.documentElement.setAttribute("color-mode", colorMode);
      window.localStorage.setItem("color-mode", colorMode);
    }
  }, [colorMode]);

  return (
    <ThemeProvider>
      <ThemeContext.Provider value={{ colorMode, setColorMode }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default MyApp;
