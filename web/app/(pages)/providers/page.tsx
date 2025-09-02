import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Our Medical Team',
  description: 'Meet our board-certified dermatologists, aesthetic specialists, and medical professionals at SkinBeauty MD. Expert care with natural results.'
}

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <main id="content">
        {/* Hero Section */}
        <section className="providers-hero">
          <div className="container">
            <div className="providers-hero-content">
              <span className="eyebrow">Our Medical Team</span>
              <h1>Meet Our Board-Certified Providers</h1>
              <p className="lead">Exceptional aesthetic medicine delivered by fellowship-trained dermatologists and certified specialists with decades of combined experience.</p>
              
              <div className="team-credentials">
                <div className="credential-item">
                  <div className="credential-icon">🏥</div>
                  <div className="credential-text">
                    <div className="credential-title">Medical Excellence</div>
                    <div className="credential-desc">Board-certified physicians</div>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">🎓</div>
                  <div className="credential-text">
                    <div className="credential-title">Advanced Training</div>
                    <div className="credential-desc">Fellowship specialized</div>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">✨</div>
                  <div className="credential-text">
                    <div className="credential-title">Natural Results</div>
                    <div className="credential-desc">Conservative approach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Director */}
        <section className="section">
          <div className="container">
            <div className="medical-director">
              <div className="provider-profile featured">
                <div className="provider-image">
                  <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop" alt="Dr. Sarah Mitchell, Medical Director" />
                  <div className="provider-badge">Medical Director</div>
                </div>
                <div className="provider-info">
                  <div className="provider-header">
                    <h2>Sarah Mitchell, MD, FAAD</h2>
                    <div className="provider-title">Board-Certified Dermatologist & Medical Director</div>
                  </div>
                  
                  <div className="provider-bio">
                    <p>Dr. Mitchell brings over 15 years of expertise in medical and cosmetic dermatology to SkinBeauty MD. Board-certified by the American Board of Dermatology and a Fellow of the American Academy of Dermatology, she completed her dermatology residency at Johns Hopkins and a Mohs surgery fellowship at UCSF.</p>
                    
                    <p>Known for her meticulous attention to detail and conservative approach, Dr. Mitchell specializes in advanced laser treatments, injectable procedures, and comprehensive skin health management. Her philosophy centers on enhancing natural beauty while prioritizing patient safety and satisfaction.</p>
                  </div>
                  
                  <div className="provider-details">
                    <div className="detail-section">
                      <h4>Education & Training</h4>
                      <ul>
                        <li>MD - Harvard Medical School</li>
                        <li>Dermatology Residency - Johns Hopkins Hospital</li>
                        <li>Mohs Surgery Fellowship - UCSF</li>
                        <li>BS Biology - Stanford University</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Board Certifications</h4>
                      <ul>
                        <li>American Board of Dermatology</li>
                        <li>American Board of Dermatopathology</li>
                        <li>Fellow, American Academy of Dermatology</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Areas of Expertise</h4>
                      <ul>
                        <li>Advanced Laser Procedures</li>
                        <li>Injectable Treatments (Botox, Fillers)</li>
                        <li>Medical Dermatology</li>
                        <li>Skin Cancer Treatment</li>
                        <li>Anti-Aging Treatments</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="provider-achievements">
                    <div className="achievement-item">
                      <div className="achievement-number">15+</div>
                      <div className="achievement-label">Years Experience</div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-number">10,000+</div>
                      <div className="achievement-label">Procedures Performed</div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-number">98%</div>
                      <div className="achievement-label">Patient Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Providers */}
        <section className="section" style={{ background: 'var(--secondary-gray)' }}>
          <div className="container">
            <div className="section-header">
              <h2>Our Specialized Team</h2>
              <p className="lead">Each member of our team brings unique expertise and specialized training to provide comprehensive aesthetic care.</p>
            </div>
            
            <div className="providers-grid">
              {/* Aesthetic Injector */}
              <div className="provider-profile">
                <div className="provider-image">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" alt="Alexandra Kim, PA-C" />
                  <div className="provider-specialty">Injectable Specialist</div>
                </div>
                <div className="provider-info">
                  <h3>Alexandra Kim, PA-C</h3>
                  <div className="provider-title">Certified Physician Assistant, Aesthetic Injector</div>
                  <p>Alexandra specializes in advanced injection techniques with 8 years of experience in aesthetic medicine. She completed specialized training in facial anatomy and advanced injection methods at the American Academy of Facial Aesthetics.</p>
                  
                  <div className="provider-specialties">
                    <div className="specialty-tag">Botox & Dysport Expert</div>
                    <div className="specialty-tag">Dermal Fillers</div>
                    <div className="specialty-tag">Facial Contouring</div>
                    <div className="specialty-tag">Lip Enhancement</div>
                  </div>
                  
                  <div className="provider-credentials-list">
                    <div>• PA-C Certified - Duke University</div>
                    <div>• AAFA Advanced Injection Certification</div>
                    <div>• 5,000+ injection procedures performed</div>
                  </div>
                </div>
              </div>
              
              {/* Laser Specialist */}
              <div className="provider-profile">
                <div className="provider-image">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" alt="Maria Rodriguez, RN" />
                  <div className="provider-specialty">Laser Expert</div>
                </div>
                <div className="provider-info">
                  <h3>Maria Rodriguez, RN, CLT</h3>
                  <div className="provider-title">Registered Nurse, Certified Laser Technician</div>
                  <p>Maria is our lead laser specialist with advanced certifications in multiple laser platforms. With 10 years of nursing experience and specialized laser training, she ensures safe and effective treatments for all skin types.</p>
                  
                  <div className="provider-specialties">
                    <div className="specialty-tag">Laser Hair Removal</div>
                    <div className="specialty-tag">IPL Photofacials</div>
                    <div className="specialty-tag">Fractional CO2</div>
                    <div className="specialty-tag">Skin Resurfacing</div>
                  </div>
                  
                  <div className="provider-credentials-list">
                    <div>• RN - UC San Diego Nursing Program</div>
                    <div>• Certified Laser Technician (CLT)</div>
                    <div>• Multiple laser platform certifications</div>
                  </div>
                </div>
              </div>
              
              {/* Aesthetician */}
              <div className="provider-profile">
                <div className="provider-image">
                  <img src="https://images.unsplash.com/photo-1594824694996-8ceaf8ec6c7a?q=80&w=600&auto=format&fit=crop" alt="Jessica Chen, LE" />
                  <div className="provider-specialty">Master Aesthetician</div>
                </div>
                <div className="provider-info">
                  <h3>Jessica Chen, LE, DMI</h3>
                  <div className="provider-title">Licensed Master Aesthetician</div>
                  <p>Jessica is our master aesthetician specializing in medical-grade skincare treatments and pre/post-procedure care. She holds advanced certifications in chemical peels, microneedling, and dermal infusion treatments.</p>
                  
                  <div className="provider-specialties">
                    <div className="specialty-tag">Chemical Peels</div>
                    <div className="specialty-tag">Microneedling</div>
                    <div className="specialty-tag">HydraFacial</div>
                    <div className="specialty-tag">Skincare Consultation</div>
                  </div>
                  
                  <div className="provider-credentials-list">
                    <div>• Licensed Aesthetician - Aveda Institute</div>
                    <div>• Dermal Microneedling Institute (DMI)</div>
                    <div>• Advanced Chemical Peel Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Team */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Why Choose Our Team</span>
              <h2>Excellence in Every Detail</h2>
              <p className="lead">Our commitment to medical excellence, ongoing education, and patient-centered care sets us apart in aesthetic medicine.</p>
            </div>
            
            <div className="team-advantages">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="var(--accent-blue)" fillOpacity="0.1"/>
                    <path d="M24 8C16.268 8 10 14.268 10 22C10 29.732 16.268 36 24 36C31.732 36 38 29.732 38 22C38 14.268 31.732 8 24 8ZM22 30L16 24L18.41 21.59L22 25.17L29.59 17.58L32 20L22 30Z" fill="var(--accent-blue)"/>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h4>Board-Certified Excellence</h4>
                  <p>All our physicians are board-certified with advanced fellowship training, ensuring the highest standards of medical care and aesthetic expertise.</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="var(--accent-teal)" fillOpacity="0.1"/>
                    <path d="M24 4C20.7 4 18 6.7 18 10V14H16C13.2 14 11 16.2 11 19V37C11 39.8 13.2 42 16 42H32C34.8 42 37 39.8 37 37V19C37 16.2 34.8 14 32 14H30V10C30 6.7 27.3 4 24 4ZM24 7C25.7 7 27 8.3 27 10V14H21V10C21 8.3 22.3 7 24 7ZM24 20C26.2 20 28 21.8 28 24C28 26.2 26.2 28 24 28C21.8 28 20 26.2 20 24C20 21.8 21.8 20 24 20Z" fill="var(--accent-teal)"/>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h4>Conservative Philosophy</h4>
                  <p>We believe in enhancing your natural beauty with subtle, refined results that look authentically you - never overdone or artificial.</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="var(--accent-gold)" fillOpacity="0.1"/>
                    <path d="M24 2L29.09 16.26L44 17.27L33.18 26.82L36.18 41.73L24 34.27L11.82 41.73L14.82 26.82L4 17.27L18.91 16.26L24 2Z" fill="var(--accent-gold)"/>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h4>Ongoing Education</h4>
                  <p>Our team continuously advances their skills through medical conferences, training programs, and certification renewals to bring you the latest techniques.</p>
                </div>
              </div>
              
              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="var(--primary-blue)" fillOpacity="0.1"/>
                    <path d="M24 4C13.5 4 5 12.5 5 23S13.5 42 24 42S43 33.5 43 23S34.5 4 24 4ZM24 8C32.3 8 39 14.7 39 23S32.3 38 24 38S9 31.3 9 23S15.7 8 24 8ZM22 14V24L30 28L31 26L24 22.5V14H22Z" fill="var(--primary-blue)"/>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h4>Personalized Care</h4>
                  <p>Every treatment is customized to your unique goals, skin type, and lifestyle, with thorough consultations and personalized treatment plans.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Consultation CTA */}
        <section className="section" style={{ background: 'var(--surface-accent)' }}>
          <div className="container">
            <div className="highlight-box">
              <span className="eyebrow">Ready to Meet Our Team?</span>
              <h2>Schedule Your Consultation</h2>
              <p className="lead">Experience the difference that board-certified expertise and personalized care can make for your aesthetic goals.</p>
              
              <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <a className="btn btn-primary" href="/contact">Book Consultation</a>
                <a className="btn btn-outline" href="/treatments">View Treatments</a>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <ul className="feature-list" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <li>Complimentary initial consultations</li>
                  <li>Same-day appointments available</li>
                  <li>Virtual consultations offered</li>
                  <li>Flexible scheduling options</li>
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

