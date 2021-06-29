import Logo from './Logo'

const Footer = () => {
    return (
      <footer className="row bg-dark text-light py-5">

          <div className="col">
            <Logo />
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0" style={{ fontSize: 15 }}>Github</p>
              <p className="m-0" style={{ fontSize: 15 }}>Linkedin</p>
              <p className="m-0" style={{ fontSize: 15 }}>Website</p>
            </div>
          </div>

          <div className="col">
            <p className="m-0 text-center" style={{ fontSize: 15 }}>© Azemar da Rosa Teixeira Neto, 2021</p>
          </div>

      </footer>
    )
};

export default Footer;
