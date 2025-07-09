import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border-2 border-metallic-gold/30 bg-cream px-4 py-3 text-base text-cool-gray placeholder:text-cool-gray/60 focus:border-metallic-gold focus:outline-none focus:ring-2 focus:ring-metallic-gold/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none input-glow transition-all duration-300",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;