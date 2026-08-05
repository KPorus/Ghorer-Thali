import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { copy } from './copy'
import type { Lang, LocaleCopy } from './types'

const STORAGE_KEY = 'ghorer-thali-lang'

type LangContextValue = {
  lang: Lang
  t: LocaleCopy
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'bn') return stored
  } catch {
    /* ignore */
  }
  return 'bn'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => readStoredLang())

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = copy[lang].documentTitle
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'bn' ? 'en' : 'bn'))

  return (
    <LangContext.Provider value={{ lang, t: copy[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
