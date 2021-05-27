import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';

const Home = () => {
  var coverClass = classNames("row", "py-5", styles.backgroundImage);

  return (
    <>
      <Header/>

      <div className={coverClass}>

          <div className="col d-flex flex-column align-items-center justify-content-center text-secondary">
            <h1
              className="text-special border-top border-bottom border-secondary border-5 rounded px-4 py-3 mt-auto"
            >ARTN-DEV</h1>
            <a className="link-secondary mt-auto" href="#second-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </a>
          </div>

      </div>

      <div id="second-row"></div>
      <div id="filler" style={{minHeight: "20.5em"}}></div>

      <Footer/>
    </>
  )
}

export default Home;