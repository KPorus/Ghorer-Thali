import { Button, SectionHeading } from '../../ui'
import { useLang, type LocaleCopy } from '../../../i18n'
import { CONTACT_EMAIL, VISIT_DETAILS } from '../../../data/site'
import { useInView } from '../../../hooks/useInView'
import './Visit.css'

export function Visit() {
  const { t } = useLang()
  const ref = useInView<HTMLElement>()

  return (
    <section
      className="section visit reveal-late"
      id="visit"
      aria-labelledby="visit-title"
      ref={ref}
    >
      <p className="visit__watermark" aria-hidden="true">
        {t.brand}
      </p>
      <div className="visit__glow" aria-hidden="true" />
      <div className="section__inner visit__inner">
        <SectionHeading
          label={t.visitLabel}
          title={t.visitTitle}
          titleId="visit-title"
          lead={t.visitLead}
        />

        <dl className="visit__details">
          {VISIT_DETAILS.map((item) => {
            const lines = t[item.bodyKey] as LocaleCopy[typeof item.bodyKey]
            return (
              <div key={item.labelKey} className="visit__item">
                <dt>{t[item.labelKey]}</dt>
                <dd>
                  {lines[0]}
                  <br />
                  {lines[1]}
                </dd>
              </div>
            )
          })}
        </dl>

        <Button href={CONTACT_EMAIL}>{t.visitCta}</Button>
      </div>
    </section>
  )
}
