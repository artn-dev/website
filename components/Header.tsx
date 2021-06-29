import Link from 'next/link';


interface HeaderLinkProps {
    children: React.ReactNode;
    href?: string;
};


const HeaderLink = ({ children, href = "#"}: HeaderLinkProps) => (
    <div className="nav-item">
        <Link href={href} passHref>
            <a className="nav-link link-light" style={{
                fontSize: 15,
            }}>{children}</a>
        </Link>
    </div>
)

const Logo = () => (
    <Link href="/" passHref>
        <a className="navbar-brand d-flex align-items-center link-light">
            <p className="m-0 fs-5">artn</p>
        </a>
    </Link>
)

const Header = () => (
    <header className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">

                <Logo />

                <button
                    className="navbar-toggler"
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
                    <div className="navbar-nav ms-auto">

                        <HeaderLink href="/">Home</HeaderLink>
                        <HeaderLink href="#">Projetos</HeaderLink>
                        <HeaderLink href="#">Sobre</HeaderLink>
                        <HeaderLink href="#">Galeria</HeaderLink>

                    </div>
                </div>

            </div>
        </nav>
    </header>
)

export default Header;
