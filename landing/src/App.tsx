import {
  Footer,
  Header,
  Hero,
  Menu,
  SkipLink,
  Story,
  Visit,
} from './components'
import { useLang } from './i18n'

export default function App() {
  const { t } = useLang()

  return (
    <>
      <SkipLink>{t.skip}</SkipLink>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Menu />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
