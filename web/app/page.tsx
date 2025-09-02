import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import BeforeAfter from './components/BeforeAfter'

export const metadata: Metadata = {
  title: 'Refined Aesthetic Dermatology',
  description: 'Board-certified providers using advanced lasers and injectables for natural, confident results.'
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="hero">
          <div className="hero-media" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-card">
              <span className="eyebrow">Refined Results</span>
              <h1>Elevated Aesthetic Care. <span>Clinically Proven</span>.</h1>
              <p className="lead">Board-certified providers using advanced lasers and injectables for natural, confident results. Beautiful work that looks like you—on your best day.</p>
              <div className="hero-badges">
                <span className="badge">Board‑Certified Dermatology</span>
                <span className="badge">Modern Laser Suite</span>
                <span className="badge">500+ 5‑Star Reviews</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/contact">Book Consultation</a>
                <a className="btn btn-outline" href="/results">View Results</a>
              </div>
            </div>
            <div>
              <div className="stat-bar">
                <div className="stat"><div className="num">15+</div><div className="label">Years Experience</div></div>
                <div className="stat"><div className="num">10k+</div><div className="label">Patients Treated</div></div>
                <div className="stat"><div className="num">98%</div><div className="label">Satisfaction</div></div>
              </div>
              <div className="divider" />
              <p className="muted">Featured and trusted by leading platforms</p>
              <div className="logo-row" aria-label="Press and partners">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Allure" src="https://dummyimage.com/120x28/ffffff/000000&text=Allure" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Vogue" src="https://dummyimage.com/100x28/ffffff/000000&text=Vogue" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="RealSelf" src="https://dummyimage.com/120x28/ffffff/000000&text=RealSelf" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="NewBeauty" src="https://dummyimage.com/140x28/ffffff/000000&text=NewBeauty" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Signature Treatments</span>
            <div className="grid grid-4">
              <a className="card" href="/treatments">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1591348278926-10e7872f4fe7?q=80&w=1200&auto=format&fit=crop" alt="Laser facial treatment" />
                <div className="card-body"><div className="card-title">Laser Rejuvenation</div><div className="card-text">Refine tone and texture with next‑gen lasers.</div></div>
              </a>
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1616394584738-fc6e61280a58?q=80&w=1200&auto=format&fit=crop" alt="Injectable treatment" />
                <div className="card-body"><div className="card-title">Injectables</div><div className="card-text">Beautifully balanced Botox and dermal fillers.</div></div>
              </a>
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop" alt="Skin health program" />
                <div className="card-body"><div className="card-title">Skin Health</div><div className="card-text">Evidence‑based plans for long‑term glow.</div></div>
              </a>
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop" alt="Body contouring" />
                <div className="card-body"><div className="card-title">Body Contouring</div><div className="card-text">Tighten and sculpt with proven devices.</div></div>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Before & After</span>
            <div className="grid grid-3">
              <BeforeAfter before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1519751138087-5a4a1e14ef91?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" />
            </div>
            <div className="cta-row" style={{ marginTop: 16 }}>
              <a className="btn btn-outline" href="/results">Explore Gallery</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container testimonials">
            <div>
              <span className="eyebrow">Patient Reviews</span>
              <h2>Trusted care, beautiful results</h2>
              <p className="lead">“I wanted natural, refined results and that’s exactly what I got. The team is caring, precise, and truly listens.”</p>
              <div className="chip-row" style={{ marginTop: 10 }}>
                <span className="chip">Google ★ 4.9</span>
                <span className="chip">RealSelf Top Doctor</span>
                <span className="chip">Allergan Top 500</span>
              </div>
            </div>
            <div className="grid">
              <div className="review"><div className="stars">★★★★★</div><div>“The best injectable experience I’ve ever had. Subtle yet transformative.”</div><div className="reviewer">— A.R.</div></div>
              <div className="review"><div className="stars">★★★★★</div><div>“Laser results that look airbrushed in person. I’m glowing.”</div><div className="reviewer">— J.M.</div></div>
              <div className="review"><div className="stars">★★★★★</div><div>“Expert guidance and a plan that finally worked for my skin.”</div><div className="reviewer">— S.K.</div></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="hero-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ margin: '0 0 6px' }}>Ready to start?</h3>
                <p style={{ margin: 0 }} className="muted">Book a consultation or send a message—we’ll guide you.</p>
              </div>
              <div className="cta-row" style={{ margin: 0 }}>
                <a className="btn btn-primary" href="/contact">Book Consultation</a>
                <a className="btn btn-outline" href="tel:+1-000-000-0000">Call Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

