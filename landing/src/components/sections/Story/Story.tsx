import { SectionHeading } from '../../ui'
import { useLang } from '../../../i18n'
import { MEDIA } from '../../../data/site'
import './Story.css'

export function Story() {
  const { t } = useLang()

  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="section__inner story__grid">
        <div className="story__copy">
          <SectionHeading
            label={t.storyLabel}
            title={t.storyTitle}
            titleId="story-title"
            lead={t.storyLead}
          />
        </div>
        <figure className="story__figure">
          <img
            src={MEDIA.story}
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
