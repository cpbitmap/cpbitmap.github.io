import { useTheme } from "@primer/react";
import React, { useContext } from "react";

import { ThemeContext } from "../../pages/_app";

export const DarkmodeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const { setColorMode: setPrimerColorMode } = useTheme();

  return (
    <label>
      Darkmode
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={() => {
          setColorMode(colorMode === "dark" ? "light" : "dark");
          setPrimerColorMode(colorMode === "dark" ? "day" : "night");
        }}
      />
    </label>
  );
};
