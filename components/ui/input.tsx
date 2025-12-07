import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={
        "border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-black " +
        className
      }
    />
  );
}

export default Input;
