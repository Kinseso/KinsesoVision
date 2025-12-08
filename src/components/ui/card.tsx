"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "flex flex-col space-y-1.5 border-b border-slate-100 px-6 py-4 dark:border-slate-800",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cx(
        "text-lg font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cx(
        "text-sm text-slate-500 dark:text-slate-400",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "px-6 py-4 text-sm text-slate-700 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "flex items-center justify-between gap-2 border-t border-slate-100 px-6 py-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400",
        className
      )}
      {...props}
    />
  );
}

// Optional default export – your pages mostly use named imports
export default Card;
