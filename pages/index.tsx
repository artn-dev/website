import Header from '../components/Header';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


const Home = () => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light">
      <div className="fixed-top">
        <Header/>
      </div>

      <div className="row">
        <MainHero />
      </div>

      <div className="row py-5">
        <About />
      </div>

      <div className="row py-5">
        <Projects />
      </div>

      <div className="row py-5">
        <Skills />
      </div>

      <div className="row">
        <Footer/>
      </div>
    </div>
  )
}

export default Home;