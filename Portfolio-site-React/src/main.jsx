import { createRoot } from 'react-dom/client'
import Header from "./Header.jsx"
import HeaderBody from "./Header-Body.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"


createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <HeaderBody />
  <Skills />
  <Projects />
  <Main />
 </>
)

function Main () {
  return (

<>


</>


  )
}
