import Hero from './assets/Hero'
import About from './assets/About'
import Particle from './assets/Particle'
import {Element} from 'react-scroll'
import Projects from './assets/Projects'
import Contacts from './assets/Contact'

function App() {
  return (
    <>
      <Particle />
      <Hero />
      <Element name='targetAbout'><About /></Element>
      <Element name='targetProjects'><Projects /></Element>
      <Element name='targetContacts'><Contacts /></Element>
    </>
  )
}

export default App
