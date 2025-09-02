import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import BeforeAfter from './components/BeforeAfter'
import CountUp from './components/CountUp'

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
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Premier Aesthetic Medicine</span>
              <h1>Transform Your Skin with <span className="highlight">Expert Care</span></h1>
              <p className="hero-subtitle">Board-certified dermatologists delivering exceptional results through advanced treatments, personalized care, and proven medical expertise.</p>
              
              <div className="hero-badges">
                <span className="badge">Board-Certified Dermatologists</span>
                <span className="badge">FDA-Approved Treatments</span>
                <span className="badge"><CountUp end={20} suffix="+" /> Years Experience</span>
                <span className="badge"><CountUp end={98} suffix="%" /> Patient Satisfaction</span>
              </div>
              
              <div className="cta-row">
                <a className="btn btn-primary" href="/contact">Schedule Consultation</a>
                <a className="btn btn-outline" href="/results">View Results</a>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stats-section">
                <div className="stat-bar">
                  <div className="stat">
                    <div className="num">
                      <CountUp end={5000} suffix="+" />
                    </div>
                    <div className="label">Patients Treated</div>
                  </div>
                  <div className="stat">
                    <div className="num">
                      <CountUp end={15} suffix="+" />
                    </div>
                    <div className="label">Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="num">
                      <CountUp end={98} suffix="%" />
                    </div>
                    <div className="label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="divider" />
              
              <div className="credentials-section">
                <h4 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>Board Certifications & Memberships</h4>
                <div className="credential-badges">
                  <div className="credential-badge">
                    <div className="credential-icon">🏥</div>
                    <div>American Board of Dermatology</div>
                  </div>
                  <div className="credential-badge">
                    <div className="credential-icon">👨‍⚕️</div>
                    <div>American Academy of Dermatology</div>
                  </div>
                  <div className="credential-badge">
                    <div className="credential-icon">✨</div>
                    <div>American Society for Aesthetic Medicine</div>
                  </div>
                </div>
                
                <div className="divider" style={{ margin: '2rem 0' }} />
                
                <div className="text-center">
                  <p className="text-muted" style={{ marginBottom: '1rem' }}>As featured in leading medical publications</p>
                  <div className="logo-row" aria-label="Featured publications">
                    <img alt="Dermatology News" src="https://dummyimage.com/140x32/2b77b5/ffffff&text=Derm+News" />
                    <img alt="Aesthetic Surgery Journal" src="https://dummyimage.com/140x32/2b77b5/ffffff&text=ASJ" />
                    <img alt="JAAD" src="https://dummyimage.com/140x32/2b77b5/ffffff&text=JAAD" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Our Specialties</span>
              <h2>Advanced Dermatological Treatments</h2>
              <p className="lead">Comprehensive aesthetic and medical dermatology services using the latest FDA-approved technologies and evidence-based approaches.</p>
            </div>
            
            <div className="grid grid-4">
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1591348278926-10e7872f4fe7?q=80&w=1200&auto=format&fit=crop" alt="Advanced laser skin treatment" />
                <div className="card-body">
                  <div className="card-title">Laser Resurfacing</div>
                  <div className="card-text">State-of-the-art fractional lasers for skin rejuvenation, acne scarring, and pigmentation correction.</div>
                </div>
              </a>
              
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1616394584738-fc6e61280a58?q=80&w=1200&auto=format&fit=crop" alt="Professional injectable treatments" />
                <div className="card-body">
                  <div className="card-title">Injectable Treatments</div>
                  <div className="card-text">Expert Botox, dermal fillers, and neurotoxin applications for natural facial enhancement.</div>
                </div>
              </a>
              
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop" alt="Medical-grade skincare" />
                <div className="card-body">
                  <div className="card-title">Medical Skincare</div>
                  <div className="card-text">Physician-grade treatments for acne, rosacea, melasma, and anti-aging protocols.</div>
                </div>
              </a>
              
              <a className="card" href="/treatments">
                <img className="card-media" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop" alt="Body rejuvenation treatments" />
                <div className="card-body">
                  <div className="card-title">Body Treatments</div>
                  <div className="card-text">Non-invasive body contouring, skin tightening, and cellulite reduction therapies.</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Before & After</span>
            <div className="grid grid-3">
              <BeforeAfter before="https://images.unsplash.com/photo-1594824694996-8ceaf8ec6c7a?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1576670071789-9a6dc2f8ccb1?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop" />
            </div>
            <div className="cta-row" style={{ marginTop: 16 }}>
              <a className="btn btn-outline" href="/results">Explore Gallery</a>
            </div>
          </div>
        </section>

        <section className="section physician-spotlight">
          <div className="container">
            <div className="physician-grid">
              <div className="physician-image">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" alt="Dr. Sarah Mitchell, Board-Certified Dermatologist" className="doctor-photo" />
                
                <div className="credentials-summary">
                  <h4>Medical Excellence</h4>
                  <ul className="credentials-list">
                    <li>Harvard Medical School, MD</li>
                    <li>Johns Hopkins Dermatology Residency</li>
                    <li>Board Certified - American Board of Dermatology</li>
                    <li>Fellowship - Mohs Surgery & Aesthetic Dermatology</li>
                  </ul>
                </div>
              </div>
              
              <div className="physician-content">
                <span className="eyebrow">Meet Your Dermatologist</span>
                <h2>Dr. Sarah Mitchell, MD</h2>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>Board-Certified Dermatologist & Medical Director</h3>
                
                <p className="lead">With over 15 years of experience in medical and aesthetic dermatology, Dr. Mitchell combines clinical expertise with an artistic approach to deliver natural, beautiful results.</p>
                
                <div className="expertise-areas">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <div className="expertise-icon">🔬</div>
                      <div>
                        <strong>Medical Dermatology</strong>
                        <p>Skin cancer screening, acne treatment, rosacea management</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <div className="expertise-icon">✨</div>
                      <div>
                        <strong>Aesthetic Procedures</strong>
                        <p>Botox, dermal fillers, laser treatments, chemical peels</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <div className="expertise-icon">🎯</div>
                      <div>
                        <strong>Advanced Lasers</strong>
                        <p>Fractional CO2, IPL, laser hair removal, tattoo removal</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="recognition">
                  <h4>Recognition & Awards</h4>
                  <div className="awards-list">
                    <span className="award">Top Doctor 2023-2024</span>
                    <span className="award">Castle Connolly Top Doctor</span>
                    <span className="award">Allergan Diamond Provider</span>
                    <span className="award">Patient Choice Award</span>
                  </div>
                </div>
                
                <div className="cta-row" style={{ marginTop: '2rem' }}>
                  <a className="btn btn-primary" href="/providers">View Full Bio</a>
                  <a className="btn btn-outline" href="/contact">Schedule Consultation</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--secondary-gray)' }}>
          <div className="container">
            <div className="testimonials">
              <div className="testimonials-content">
                <span className="eyebrow">Patient Testimonials</span>
                <h2>Exceptional Results, Exceptional Care</h2>
                <p className="lead">Our patients consistently experience outstanding outcomes and world-class service from our board-certified team.</p>
                
                <div className="trust-badges">
                  <div className="trust-badge">★ 4.9 Google Reviews</div>
                  <div className="trust-badge">Top 1% RealSelf</div>
                  <div className="trust-badge">Allergan Diamond</div>
                  <div className="trust-badge">AAD Certified</div>
                </div>
              </div>
              
              <div className="testimonials-reviews">
                <div className="review">
                  <div className="stars">★★★★★</div>
                  <div className="review-text">"Dr. Smith transformed my skin with laser treatments. The results exceeded my expectations, and the entire team was incredibly professional and knowledgeable."</div>
                  <div className="reviewer">— Sarah M.</div>
                </div>
                
                <div className="review">
                  <div className="stars">★★★★★</div>
                  <div className="review-text">"Best Botox and filler work I've ever had. Natural-looking results that enhance my features rather than change them completely."</div>
                  <div className="reviewer">— Jennifer L.</div>
                </div>
                
                <div className="review">
                  <div className="stars">★★★★★</div>
                  <div className="review-text">"The medical-grade skincare regimen they designed cleared my acne and gave me the confidence I'd been missing for years."</div>
                  <div className="reviewer">— Michael R.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="highlight-box">
              <span className="eyebrow">Ready to Begin?</span>
              <h2>Schedule Your Personal Consultation</h2>
              <p className="lead">Meet with our board-certified dermatologists to discuss your goals and create a personalized treatment plan tailored to your unique needs.</p>
              
              <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <a className="btn btn-primary" href="/contact">Book Free Consultation</a>
                <a className="btn btn-outline" href="tel:+1-555-SKIN-MD">Call (555) SKIN-MD</a>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <ul className="feature-list" style={{ maxWidth: '400px', margin: '0 auto' }}>
                  <li>Comprehensive skin analysis</li>
                  <li>Personalized treatment recommendations</li>
                  <li>No-pressure consultation</li>
                  <li>Same-day treatment available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

