import Logo from './Logo'
import styles from '../styles/Home.module.scss'

const Footer = () => {
  return (
    <footer className="row bg-dark text-light py-5">

        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Logo />
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className={styles.footerLinks}>
            <p className="m-0">Github</p>
            <p className="m-0">Linkedin</p>
            <p className="m-0">Website</p>
          </div>
        </div>

        <div className="col">
          <p className={styles.copyrightNotice}>© Azemar da Rosa Teixeira Neto, 2021</p>
        </div>

    </footer>
  )
};

export default Footer;
