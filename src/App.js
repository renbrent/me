import Navigate from './components/Navigate'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ImgBackground from './images/home_bkg1.jpg'



function App() {

  const background = "uk-background-cover uk-animation-fade uk-section "

  return (
    <div>
      <Navigate />
      <div className="uk-text-center">
        <div className={background}
             style={{ backgroundImage: 'url(' + ImgBackground + ')' }}>
          <div className="uk-section"   id="home">
            <Home />
          </div>
        </div>
        <div className="uk-section" id="about" >
          <About />
        </div>
        <div className="uk-section" id="projects">
          <Projects />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App;