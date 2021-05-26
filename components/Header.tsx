import Link from 'next/link';
import classNames from 'classnames';


interface HeaderLinkProps {
    children: React.ReactNode;
    href?: string;
};

interface HeaderProps {
    cover?: boolean;
}


const HeaderLink = ({ children, href = "#"}: HeaderLinkProps) => (
    <div className="nav-item">
        <Link href={href} passHref>
            <a className="nav-link text-secondary">{children}</a>
        </Link>
    </div>
)

const Header = ({ cover = false }: HeaderProps) => {

    var navbarClass = classNames({
        "navbar": true,
        "navbar-expand-lg": true,
        "navbar-light": true,
        "bg-light": !cover,
        "border-bottom": !cover,
        "border-primary": !cover
    });

    var brandName = classNames({
        "text-primary": !cover,
        "text-secondary": cover,
        "text-special": true,
        "m-0": true,
        "fs-3": true
    })

    var brandImgPath = cover ? "/logo-orange.png" : "/logo-purple.png";
    
    return (
        <nav className={navbarClass}>
            <div className="container-fluid">

                <Link href="/" passHref>
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img height="32" src={brandImgPath} alt=""/>
                        <p className={brandName}>ARTN</p>
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
}

export default Header;
