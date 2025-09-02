import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = { title: 'Contact', description: 'Book a consultation at SkinBeauty MD or contact our team with questions.' }

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container" style={{ maxWidth: 860 }}>
            <span className="eyebrow">Contact</span>
            <h1>Book a Consultation</h1>
            <p className="lead">Tell us your goals and preferred times. Our team will reach out to confirm details.</p>
            <div className="divider" />
            <form className="form" aria-label="Contact form">
              <div>
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(000) 000‑0000" />
              </div>
              <div>
                <label htmlFor="service">Service Interest</label>
                <select id="service" name="service">
                  <option>General Consultation</option>
                  <option>Injectables</option>
                  <option>Laser</option>
                  <option>Skin Health</option>
                  <option>Body Contouring</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="What would you like help with?" />
              </div>
              <div className="cta-row"><button className="btn btn-primary" type="submit">Submit</button><a className="btn btn-outline" href="tel:+1-000-000-0000">Call Us</a></div>
              <small className="muted">Submitting this form does not confirm an appointment. We respect your privacy.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .form { display:grid; gap: 12px; background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 18px; }
        .form label { font-weight:600; font-size:14px; }
        .form input, .form textarea, .form select { background: #0c0f15; color: var(--sb-text); border:1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px; font: inherit; }
      `}</style>
    </>
  )
}

