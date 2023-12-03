import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/utils";

const buttonVariants = cva(
  "font-medium transition-colors tracking-wide text-center ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#5e5be9] rounded-md",
        outline:
          "border-2 border-primary text-white hover:bg-muted-1 focus-visible:bg-muted-1",
        accent: "bg-muted-white-1 hover:bg-muted-white-2 text-background",
        icon: "rounded-full bg-muted-2 hover:bg-muted-1 focus-visible:bg-muted-1",
      },
      size: {
        default: "px-6 py-2 rounded text-base",
        sm: "px-4 py-2 rounded-md text-sm",
        lg: "px-8 py-3 rounded-md",
        icon: "inline-flex justify-center items-center h-9 w-9 md:h-11 md:w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
