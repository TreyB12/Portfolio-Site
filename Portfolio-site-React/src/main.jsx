import { createRoot } from 'react-dom/client'
import Header from "./Header.jsx"
import HeaderBody from "./Header-Body.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import Footer from "./Footer.jsx"
import BottomFooter from "./Bottom-footer.jsx"

createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <HeaderBody />
  <Skills />
  <Projects />
  <Footer />
  <BottomFooter />
  <Main />
 </>
)

function Main () {
  return (

<>


</>


  )
}
