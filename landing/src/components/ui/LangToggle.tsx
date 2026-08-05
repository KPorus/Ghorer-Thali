import { useLang } from '../../i18n'

export function LangToggle() {
  const { t, toggleLang } = useLang()

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.langAria}
    >
      {t.langSwitch}
    </button>
  )
}
