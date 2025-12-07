import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Simple reusable Textarea component for KinsesoVision.
 */
export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={
        "border border-gray-300 rounded-md p-2 w-full min-h-[100px] " +
        className
      }
    />
  );
}

export default Textarea;
