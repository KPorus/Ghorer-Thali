import { useLang } from '../lang'
import './Visit.css'

export function Visit() {
  const { t } = useLang()

  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="section__inner visit__inner">
        <p className="section__label">{t.visitLabel}</p>
        <h2 className="section__title" id="visit-title">
          {t.visitTitle}
        </h2>
        <p className="section__lead">{t.visitLead}</p>

        <dl className="visit__details">
          <div>
            <dt>{t.visitAddress}</dt>
            <dd>
              {t.visitAddressBody[0]}
              <br />
              {t.visitAddressBody[1]}
            </dd>
          </div>
          <div>
            <dt>{t.visitHours}</dt>
            <dd>
              {t.visitHoursBody[0]}
              <br />
              {t.visitHoursBody[1]}
            </dd>
          </div>
          <div>
            <dt>{t.visitReserve}</dt>
            <dd>
              {t.visitReserveBody[0]}
              <br />
              {t.visitReserveBody[1]}
            </dd>
          </div>
        </dl>

        <a className="btn btn--primary" href="mailto:hello@ghorerthali.example">
          {t.visitCta}
        </a>
      </div>
    </section>
  )
}
