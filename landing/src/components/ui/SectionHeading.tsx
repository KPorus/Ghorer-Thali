type SectionHeadingProps = {
  label: string
  title: string
  titleId: string
  lead?: string
}

export function SectionHeading({
  label,
  title,
  titleId,
  lead,
}: SectionHeadingProps) {
  return (
    <>
      <p className="section__label">{label}</p>
      <h2 className="section__title" id={titleId}>
        {title}
      </h2>
      {lead ? <p className="section__lead">{lead}</p> : null}
    </>
  )
}
