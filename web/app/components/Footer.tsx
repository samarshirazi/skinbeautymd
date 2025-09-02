import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <span className="brand-mark">SB</span>
              <span className="brand-name">SkinBeauty MD</span>
            </Link>
            <p>Board-certified dermatology practice specializing in advanced aesthetic treatments and medical skincare. Committed to delivering exceptional results through evidence-based care.</p>
            
            <div style={{ marginTop: '1.5rem' }}>
              <p><strong>Office Hours:</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p style={{ marginBottom: '0.5rem' }}>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h4>Treatments</h4>
            <ul>
              <li><Link href="/treatments">Laser Resurfacing</Link></li>
              <li><Link href="/treatments">Injectable Treatments</Link></li>
              <li><Link href="/treatments">Medical Skincare</Link></li>
              <li><Link href="/treatments">Body Treatments</Link></li>
              <li><Link href="/pricing">Treatment Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4>Practice</h4>
            <ul>
              <li><Link href="/providers">Our Doctors</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/results">Before & After</Link></li>
              <li><Link href="/reviews">Patient Reviews</Link></li>
              <li><Link href="/blog">Medical Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4>Contact</h4>
            <div style={{ marginBottom: '1rem' }}>
              <p><strong>Schedule Consultation:</strong></p>
              <p><Link href="/contact">Online Booking</Link></p>
              <p><Link href="tel:+1-555-SKIN-MD">(555) SKIN-MD</Link></p>
            </div>
            
            <div>
              <p><strong>General Inquiries:</strong></p>
              <p><Link href="mailto:info@skinbeautymd.com">info@skinbeautymd.com</Link></p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} SkinBeauty MD. All rights reserved. 
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

