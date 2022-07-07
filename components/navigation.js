import Link from 'next/link'

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <Link href="/"><a>Home</a></Link>
                <Link href="/price"><a>Price</a></Link>
                <Link href="/galery"><a>Galery</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
        </div>)
}

export default Navigation
