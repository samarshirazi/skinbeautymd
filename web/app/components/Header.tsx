import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-mark">SB</span>
          <span className="brand-name">SkinBeauty MD</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/treatments">Treatments</Link>
          <Link href="/providers">Providers</Link>
          <Link href="/results">Results</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="btn btn-primary" href="/contact">Book Consultation</Link>
      </div>
    </header>
  )
}

