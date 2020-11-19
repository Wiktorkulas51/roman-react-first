import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href, secondery, close, ...props }) => {
  const seconderyClass = secondery ? styles.secondery : styles.button;
  const closeClass = close ? styles.close : seconderyClass;
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={closeClass}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={closeClass} {...props}>
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
