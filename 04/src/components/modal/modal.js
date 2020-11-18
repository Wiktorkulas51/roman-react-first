import React from "react";
import styles from "./modal.module.scss";
import From from "../Form/Form";

const Modal = () => {
  console.log(styles.wrapper);
  return (
    <div className={styles.wrapper}>
      <From />
    </div>
  );
};

export default Modal;
