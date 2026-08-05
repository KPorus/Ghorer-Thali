import { useLang } from '../lang'
import './Hero.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__image"
          src={HERO_IMAGE}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero__veil" />
        <div className="hero__steam" />
      </div>

      <div className="hero__content reveal">
        <p className="hero__brand" id="hero-brand">
          {t.brand}
        </p>
        <h1 className="hero__headline">{t.heroHeadline}</h1>
        <p className="hero__support">{t.heroSupport}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            {t.heroCtaMenu}
          </a>
          <a className="btn btn--ghost" href="#visit">
            {t.heroCtaVisit}
          </a>
        </div>
      </div>
    </section>
  )
}
