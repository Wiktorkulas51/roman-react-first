import React from "react";
import Button from "../../Button/Button";
import HeaderNavigation from "../headerNavigation";
import styles from "./header.module.scss";
import logoImage from "../../../assets/images/logo.svg";

const Header = () => {
  console.log(styles.wrapper);
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt="favNote" className={styles.wrapperLogo} />
      <HeaderNavigation />
      <Button secondery>add new Item</Button>
    </header>
  );
};

export default Header;
