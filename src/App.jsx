import About from './Components/About'
import Contact from './Components/Contact'
import Foooter from './Components/Foooter'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Services from './Components/Services'

function App() {

  return (
<div>
<Navbar/>
<main>
  <div id='home'>
    <Home/>
  </div>
  <div id='about'>
    <About/>
  </div>
  <div id='services'>
    <Services/>
  </div>
  <div id='projects'>
    <Project/>
  </div>
  <div id='contact'>
    <Contact/>
  </div>
</main>
<Foooter/>
</div>
  )
}

export default App
