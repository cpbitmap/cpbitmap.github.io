import React, { useContext } from "react";

import { ThemeContext } from "../../pages/_app";

export const DarkmodeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <label>
      Darkmode
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
      />
    </label>
  );
};
