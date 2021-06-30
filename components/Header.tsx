import Link from 'next/link';
import Logo from './Logo'


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

const Header = () => (
    <header className="fixed-top bg-primary">
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <div className="navbar-brand">
                    <Logo />
                </div>

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
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink href="#about">Sobre</HeaderLink>
                        <HeaderLink>Projetos</HeaderLink>
                    </div>
                </div>

            </div>
        </nav>
    </header>
)

export default Header;
