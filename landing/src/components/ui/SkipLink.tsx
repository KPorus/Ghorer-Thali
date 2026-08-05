type SkipLinkProps = {
  href?: string
  children: string
}

export function SkipLink({ href = '#main', children }: SkipLinkProps) {
  return (
    <a className="skip-link" href={href}>
      {children}
    </a>
  )
}
