import { LangToggle } from '../../ui'
import { useLang } from '../../../i18n'
import { NAV_LINKS } from '../../../data/site'
import './Header.css'

export function Header() {
  const { t } = useLang()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label={t.brandHome}>
          {t.brand}
        </a>
        <div className="site-header__right">
          <nav className="site-header__nav" aria-label={t.navLabel}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {t[link.labelKey]}
              </a>
            ))}
          </nav>
          <LangToggle />
        </div>
      </div>
    </header>
  )
}
