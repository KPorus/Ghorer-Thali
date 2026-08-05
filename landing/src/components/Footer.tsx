import { useLang } from '../lang'
import './Footer.css'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{t.brand}</p>
        <p className="site-footer__note">{t.footerNote}</p>
      </div>
    </footer>
  )
}
