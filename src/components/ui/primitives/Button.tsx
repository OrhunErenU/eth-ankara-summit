'use client'

import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-eth-purple to-ankara-gold text-white hover:shadow-[0_0_30px_rgba(98,126,234,0.4)] hover:scale-[1.02]',
  secondary:
    'border border-eth-purple/40 text-text-primary hover:border-eth-purple hover:bg-eth-purple/10 hover:scale-[1.02]',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-white/5',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = 'primary', size = 'md', className = '', href, children, ...props }, ref) {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-glow focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed'

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (href) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
