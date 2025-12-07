import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Simple Card container used in KinsesoVision layouts.
 */
export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={
        "rounded-xl border border-gray-200 bg-white p-4 shadow-sm " +
        className
      }
    />
  );
}

export default Card;
