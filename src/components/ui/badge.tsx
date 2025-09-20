import React from "react";
type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: "default"|"secondary"|"green"|"blue"|"purple" };
export function Badge({ className="", variant="default", ...props }: Props){
  const v = variant==="secondary"?"bg-gray-100 text-gray-900":variant==="green"?"bg-green-100 text-green-900":variant==="blue"?"bg-blue-100 text-blue-900":variant==="purple"?"bg-purple-100 text-purple-900":"bg-black text-white";
  return <span {...props} className={`inline-flex items-center rounded-2xl px-2.5 py-1 text-xs ${v} ${className}`} />;
}
