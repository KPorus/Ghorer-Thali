import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export function Button({ href, variant = 'primary', children }: ButtonProps) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {children}
    </a>
  )
}
