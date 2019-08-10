import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <NavLink to="/" className={styles.tab}>
        Module1
      </NavLink>
      <NavLink to="/2/" className={styles.tab}>
        Module2
      </NavLink>
    </div>
  );
};
