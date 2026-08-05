import { useId, useState } from 'react'
import { SectionHeading, VisuallyHidden } from '../../ui'
import { useLang, type DishId } from '../../../i18n'
import { DISH_IDS, MEDIA } from '../../../data/site'
import './Menu.css'

export function Menu() {
  const { t } = useLang()
  const [active, setActive] = useState<DishId>('peshawari')
  const labelId = useId()
  const selected = t.dishes[active]

  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="section__inner">
        <SectionHeading
          label={t.menuLabel}
          title={t.menuTitle}
          titleId="menu-title"
          lead={t.menuLead}
        />

        <div className="menu__picker" role="tablist" aria-labelledby={labelId}>
          <span id={labelId} className="visually-hidden">
            {t.menuListLabel}
          </span>
          {DISH_IDS.map((id) => {
            const isActive = id === active
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`menu__tab${isActive ? ' is-active' : ''}`}
                onClick={() => setActive(id)}
              >
                {t.dishes[id].name}
              </button>
            )
          })}
        </div>

        <div
          className="menu__panel"
          role="tabpanel"
          aria-live="polite"
          key={`${active}-${selected.name}`}
        >
          <figure className="menu__visual">
            <img
              src={MEDIA.dishes[active]}
              alt={selected.alt}
              width={900}
              height={600}
              loading="lazy"
            />
          </figure>
          <div className="menu__copy">
            <h3 className="menu__name">{selected.name}</h3>
            <p className="menu__desc">{selected.desc}</p>
            <p className="menu__price">
              <VisuallyHidden>{t.priceLabel}</VisuallyHidden>৳{selected.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
