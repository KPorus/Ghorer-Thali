import { useId, useState } from 'react'
import { useLang } from '../lang'
import './Menu.css'

const dishIds = ['peshawari', 'curry', 'biryani'] as const

const images = {
  peshawari: '/images/peshawari.png',
  curry:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
  biryani:
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
} as const

export function Menu() {
  const { t } = useLang()
  const [active, setActive] = useState<(typeof dishIds)[number]>('peshawari')
  const labelId = useId()
  const selected = t.dishes[active]

  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="section__inner">
        <p className="section__label">{t.menuLabel}</p>
        <h2 className="section__title" id="menu-title">
          {t.menuTitle}
        </h2>
        <p className="section__lead">{t.menuLead}</p>

        <div className="menu__picker" role="tablist" aria-labelledby={labelId}>
          <span id={labelId} className="visually-hidden">
            {t.menuListLabel}
          </span>
          {dishIds.map((id) => {
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
              src={images[active]}
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
              <span className="visually-hidden">{t.priceLabel}</span>৳
              {selected.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
