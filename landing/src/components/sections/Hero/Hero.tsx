import { Button } from '../../ui'
import { useLang } from '../../../i18n'
import { MEDIA } from '../../../data/site'
import './Hero.css'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__image"
          src={MEDIA.hero}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero__veil" />
        <div className="hero__ember" />
        <div className="hero__steam" />
        <div className="hero__steam hero__steam--late" />
      </div>

      <div className="hero__content reveal">
        <p className="hero__brand" id="hero-brand">
          {t.brand}
        </p>
        <h1 className="hero__headline">{t.heroHeadline}</h1>
        <p className="hero__support">{t.heroSupport}</p>
        <div className="hero__actions">
          <Button href="#menu">{t.heroCtaMenu}</Button>
          <Button href="#visit" variant="ghost">
            {t.heroCtaVisit}
          </Button>
        </div>
      </div>
    </section>
  )
}
