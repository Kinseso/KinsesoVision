import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Simple reusable Button component for KinsesoVision.
 * It just renders a normal <button> but keeps any props that are passed.
 */
export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded-md font-medium bg-black text-white hover:opacity-90 " +
        className
      }
    />
  );
}

export default Button;
