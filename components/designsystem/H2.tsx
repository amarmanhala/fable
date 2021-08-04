import React from "react";

const H2 = (props) => {
  return (
    <h2 className="dark:text-textSecondary text-textSecondary font-medium text-xl tracking-wide">
      {props.children}
    </h2>
  );
};
export { H2 };
