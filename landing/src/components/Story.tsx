import { useLang } from '../lang'
import './Story.css'

export function Story() {
  const { t } = useLang()

  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="section__inner story__grid">
        <div className="story__copy">
          <p className="section__label">{t.storyLabel}</p>
          <h2 className="section__title" id="story-title">
            {t.storyTitle}
          </h2>
          <p className="section__lead">{t.storyLead}</p>
        </div>
        <figure className="story__figure">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80"
            alt={t.storyAlt}
            width={1200}
            height={900}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
