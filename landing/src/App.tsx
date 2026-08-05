import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Menu } from './components/Menu'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { useLang } from './lang'
import './App.css'

function App() {
  const { t } = useLang()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
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

export default App
