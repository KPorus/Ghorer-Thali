import { Button, SectionHeading } from '../../ui'
import { useLang, type LocaleCopy } from '../../../i18n'
import { CONTACT_EMAIL, VISIT_DETAILS } from '../../../data/site'
import './Visit.css'

export function Visit() {
  const { t } = useLang()

  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
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
              <div key={item.labelKey}>
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
