import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./headerNavigation.module.scss";

const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.wrapper}>
        <li className={styles.NavItem}>
          <NavLink
            exact
            activeClassName={styles.NavItemLinkActive}
            className={styles.NavItemLink}
            to="/"
          >
            Twitters
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            activeClassName={styles.NavItemLinkActive}
            className={styles.NavItemLink}
            to="/articules"
          >
            Articules
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            activeClassName={styles.NavItemLinkActive}
            className={styles.NavItemLink}
            to="/notes"
          >
            Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
