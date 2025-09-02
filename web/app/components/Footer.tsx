export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="/" style={{ marginBottom: 10, display: 'inline-flex' }}>
            <span className="brand-mark">SB</span>
            <span className="brand-name">SkinBeauty MD</span>
          </a>
          <p>Refined aesthetic dermatology in a boutique clinical setting. Evidence‑based care, tailored to you.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><a href="/treatments">Treatments</a><br /><a href="/results">Results</a><br /><a href="/pricing">Pricing</a></p>
        </div>
        <div>
          <h4>Company</h4>
          <p><a href="/providers">Providers</a><br /><a href="/about">About</a><br /><a href="/blog">Blog</a></p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Mon–Fri 9–6 • Sat by appt.<br />
            <a href="mailto:hello@skinbeautymd.com">hello@skinbeautymd.com</a><br />
            <a href="tel:+1-000-000-0000">(000) 000‑0000</a></p>
        </div>
      </div>
      <div className="container">
        <div className="divider"></div>
        <div className="copyright">© {new Date().getFullYear()} SkinBeauty MD. All rights reserved.</div>
      </div>
    </footer>
  )
}

