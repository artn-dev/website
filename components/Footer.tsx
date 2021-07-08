import Link from 'next/link'
import Logo from './Logo'
import styles from '../styles/Home.module.scss'


interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
};


const FooterLink = ({ children, href = "/"}: FooterLinkProps) => (
  <>
    <Link href={href} passHref>
      <a className="link-light">{children}</a>
    </Link>
  </>
)

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-light py-5">
      <div className="row">

        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Logo color="light" />
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className={styles.footerLinks}>
            <FooterLink>Github</FooterLink>
            <FooterLink>Linkedin</FooterLink>
            <FooterLink>Website</FooterLink>
          </div>
        </div>

        <div className="col">
          <p className={styles.copyrightNotice}>© Azemar da Rosa Teixeira Neto, 2021</p>
        </div>

      </div>
    </footer>
  )
};

export default Footer;
