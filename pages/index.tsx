import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';
import MainHero from '../components/MainHero';

const Home = () => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light">
      <div className="row">
        <Header/>
      </div>

      <div className="row">
        <MainHero />
      </div>

      <div id="second-row"></div>
      <div id="filler" style={{minHeight: "20.5em"}}></div>

      <div className="row">
        <Footer/>
      </div>
    </div>
  )
}

export default Home;