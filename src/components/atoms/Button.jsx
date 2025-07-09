import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-metallic-gold disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-metallic-gold to-dark-goldenrod text-white hover:shadow-lg hover:shadow-dark-goldenrod/30 hover:-translate-y-1",
    secondary: "bg-cream text-dark-goldenrod border-2 border-metallic-gold hover:bg-metallic-gold hover:text-white hover:shadow-lg hover:shadow-metallic-gold/30",
    outline: "border-2 border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-white hover:shadow-lg hover:shadow-metallic-gold/30",
    ghost: "text-dark-goldenrod hover:bg-cream hover:text-dark-goldenrod"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;