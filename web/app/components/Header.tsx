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
          <div className="nav-dropdown">
            <Link href="/treatments" className="nav-main">Treatments</Link>
            <div className="dropdown-content">
              <Link href="/treatments/laser">Laser Resurfacing</Link>
              <Link href="/treatments/injectables">Botox & Fillers</Link>
              <Link href="/treatments/medical">Medical Skincare</Link>
              <Link href="/treatments/body">Body Treatments</Link>
            </div>
          </div>
          <Link href="/providers">Our Doctors</Link>
          <Link href="/results">Before & After</Link>
          <Link href="/reviews">Patient Reviews</Link>
          <Link href="/about">Practice</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="btn btn-primary" href="/contact">Book Consultation</Link>
      </div>
    </header>
  )
}

