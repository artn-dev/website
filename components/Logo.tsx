import Link from 'next/link'

const Logo = ({ color = 'dark' }) => (
    <Link href="/" passHref>
        <a className={`r-0 link-${color} text-center`}>
            <p className="m-0 fs-5">artn</p>
        </a>
    </Link>
)

export default Logo
