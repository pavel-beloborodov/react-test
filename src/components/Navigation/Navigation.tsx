import React from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./Navigation.module.scss";
import cn from "classnames";
import { ReactComponent as BackIcon } from "assets/arrow_back.svg";
interface HeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
}
function Navigation(props: HeaderProps) {
  let { title, onBack, className } = props;
  return (
    <div className={cn(styles.navigation, className)}>
      {onBack ? (
        <IconButton
          className={styles.navigationButton}
          Icon={BackIcon}
          title="Back"
          aria-label="Back"
          onClick={onBack}
        />
      ) : null}
      <h1 className={styles.navigationTitle}>{title}</h1>
    </div>
  );
}

export default React.memo(Navigation);
