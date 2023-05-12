import React from "react";
import styles from "./styles.module.less";
import { MainTitleProps } from "./types";

export const MainTitle: React.FC<MainTitleProps> = ({ webTitle }: MainTitleProps) => {
  return (
    <div className={styles.mainTitle}>
      <h1>
        <a href="/">{webTitle}</a>
      </h1>
    </div>
  );
};

export default MainTitle;
