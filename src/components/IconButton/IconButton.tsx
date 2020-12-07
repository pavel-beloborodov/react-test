import React from "react";
import styles from "./IconButton.module.scss";
import cn from "classnames";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Icon: React.FunctionComponent;
  invert?: boolean;
}

function IconButton({ Icon, invert, className, ...rest }: IconButtonProps) {
  return (
    <button
      className={cn(styles.button, className, { [styles.invert]: invert })}
      {...rest}
    >
      <Icon />
    </button>
  );
}

export default React.memo(IconButton);
