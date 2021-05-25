import Link from 'next/link';


interface HeaderLinkProps {
    children: React.ReactNode;
    href?: string;
};


const HeaderLink = ({ children, href = "#"}: HeaderLinkProps) => (
    <div className="nav-item">
        <Link href={href} passHref>
            <a className="nav-link text-secondary">{children}</a>
        </Link>
    </div>
)

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-primary">
        <div className="container-fluid">

            <Link href="/" passHref>
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img height="32" src="/logo-gray-small.png" alt=""/>
                    <p className="text-primary m-0 fs-3">ARTN</p>
                </a>
            </Link>

            <button
                className="navbar-toggler border-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav text-center ms-auto mb-2 mb-lg-0">

                    <HeaderLink href="/">Home</HeaderLink>
                    <HeaderLink href="#">Projetos</HeaderLink>
                    <HeaderLink href="#">Sobre</HeaderLink>
                    <HeaderLink href="#">Galeria</HeaderLink>

                </div>
            </div>

        </div>
    </nav>
);

export default Header;
