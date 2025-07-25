import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-button-gradient text-midnight-blue hover:scale-105 hover:shadow-glow",
        secondary:
          "bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-midnight-blue hover:scale-105",
        ghost: "text-platinum-white hover:bg-white/10 hover:text-vibrant-teal",
        outline:
          "border-2 border-vibrant-teal text-vibrant-teal hover:bg-vibrant-teal hover:text-midnight-blue hover:scale-105",
        premium:
          "bg-glass-morphism border border-white/20 text-platinum-white hover:bg-white/20 hover:scale-105 backdrop-blur-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
