import React from "react";
import styles from "./modal.module.scss";
import Button from "../Button/Button";
import From from "../Form/Form";

const Modal = ({ closeModalFn }) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={closeModalFn} secondery close>
        X
      </Button>
      <From />
    </div>
  );
};

export default Modal;
