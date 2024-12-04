import React from "react";
import styles from "./styles.module.css";

type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

export const Button = ({
  onClick,
  children,
  color = "primary",
  size = "medium",
}: {
  onClick: () => void;
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
}) => {
  const colorClassName =
    color === "primary" ? styles.primaryButton : styles.secondaryButton;

  const sizeClassName =
    size === "small" ? styles.smallButton : styles.mediumButton;

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${colorClassName} ${sizeClassName}`}
    >
      {children}
    </button>
  );
};
