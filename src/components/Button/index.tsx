import React from "react";
import styles from "./styles.module.css";

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return <button onClick={onClick} className={styles.primaryButton}>{children}</button>;
};
