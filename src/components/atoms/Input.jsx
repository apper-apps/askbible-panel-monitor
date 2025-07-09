import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-lg border-2 border-metallic-gold/30 bg-cream px-4 py-2 text-base text-cool-gray placeholder:text-cool-gray/60 focus:border-metallic-gold focus:outline-none focus:ring-2 focus:ring-metallic-gold/20 disabled:cursor-not-allowed disabled:opacity-50 input-glow transition-all duration-300",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;