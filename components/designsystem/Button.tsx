import React from "react";

interface ButtonProps {
  title: string;
  primary?: boolean;
  small?: boolean;
  large?: boolean;
  secondary?: boolean;
  isWidthFull?: boolean;
  onSubmit(): any;
}

const Button = (props: ButtonProps) => {
  return (
    <button
    type="submit"
      className={`${props.primary && "bg-primary"} ${
        props.secondary && "dark:bg-darkButtonSecondary bg-buttonSecondary"
      } ${props.small && "px-4 md:px-6 py-1"}
      ${props.isWidthFull && "w-full"}
      ${props.large && "px-6 md:px-8 py-3 hover:bg-darkButtonPrimaryHover font-semibold"}
      rounded border dark:border-borderDark border-borderLight dark:text-textPrimaryDark text-textPrimary cursor-pointer dark:hover:border-borderDarkHover hover:border-borderLightHover tracking-wide text-sm md:text-base font-light focus:outline-none tracking-wider dark:hover:border-none`}
      onSubmit={props.onSubmit}
    >
      {props.title}
    </button>
  );
};
export { Button };
