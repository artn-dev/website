import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';
import MainHero from '../components/MainHero';

const Home = () => {
  return (
    <>
      <Header/>

      <MainHero />

      <div id="second-row"></div>
      <div id="filler" style={{minHeight: "20.5em"}}></div>

      <Footer/>
    </>
  )
}

export default Home;