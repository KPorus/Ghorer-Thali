import { SectionHeading } from '../../ui'
import { useLang } from '../../../i18n'
import { MEDIA } from '../../../data/site'
import { useInView } from '../../../hooks/useInView'
import './Story.css'

export function Story() {
  const { t } = useLang()
  const ref = useInView<HTMLElement>()

  return (
    <section
      className="section story reveal-late"
      id="story"
      aria-labelledby="story-title"
      ref={ref}
    >
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
          <div className="story__glow" aria-hidden="true" />
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
