import { useLang } from '../lang'
import './Header.css'

export function Header() {
  const { t, toggleLang } = useLang()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label={t.brandHome}>
          {t.brand}
        </a>
        <div className="site-header__right">
          <nav className="site-header__nav" aria-label={t.navLabel}>
            <a href="#story">{t.navStory}</a>
            <a href="#menu">{t.navMenu}</a>
            <a href="#visit">{t.navVisit}</a>
          </nav>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t.langAria}
          >
            {t.langSwitch}
          </button>
        </div>
      </div>
    </header>
  )
}
