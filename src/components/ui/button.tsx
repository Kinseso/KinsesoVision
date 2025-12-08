"use client";

import * as React from "react";

/**
 * Variants and sizes we support.
 * Make sure "outline" is included so <Button variant="outline" /> works.
 */
export type ButtonVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "outline"
  | "danger"
  | "success"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

/**
 * Simple className join helper (no external deps).
 */
function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Base button styles shared by all variants.
 */
const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium " +
  "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

/**
 * Visual styles for each variant.
 * Tweak these Tailwind classes however you like.
 */
const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-900 focus-visible:ring-slate-400",
  outline:
    "border border-emerald-500 text-emerald-600 bg-transparent " +
    "hover:bg-emerald-50 focus-visible:ring-emerald-500",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
  link:
    "bg-transparent underline-offset-4 hover:underline text-emerald-600 " +
    "focus-visible:ring-emerald-500",
};

/**
 * Size styles.
 */
const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-6",
  icon: "h-10 w-10",
};

/**
 * Helper that lets other components compute button classes
 * (e.g. buttonVariants({ variant: "outline", size: "lg" }))
 */
export function buttonVariants(options?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const variant = options?.variant ?? "default";
  const size = options?.size ?? "default";

  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    options?.className
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Main Button component.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "default",
      size = "default",
      type = "button",
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        className={buttonVariants({ variant, size, className })}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
