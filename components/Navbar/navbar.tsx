import React, { useContext } from "react";

import { ThemeContext } from "../../pages/_app";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.navbar}>
        <label>
          Darkmode
          <input
            type="checkbox"
            checked={colorMode === "dark"}
            onChange={() =>
              setColorMode(colorMode === "dark" ? "light" : "dark")
            }
          />
        </label>
      </div>
      <div style={{ minHeight: "50px" }} />
    </>
  );
};
