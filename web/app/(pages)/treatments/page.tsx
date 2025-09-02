import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Treatments',
  description: "Explore SkinBeauty MD's signature aesthetic treatments: lasers, injectables, skin health, body contouring and more."
}

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main id="content">
        {/* Hero Section */}
        <section className="treatments-hero">
          <div className="container">
            <div className="treatments-hero-content">
              <span className="eyebrow">Advanced Medical Aesthetics</span>
              <h1>Comprehensive Treatment Menu</h1>
              <p className="lead">State-of-the-art procedures performed by board-certified dermatologists using FDA-approved technologies for safe, effective results.</p>
              
              <div className="treatment-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Treatment Options</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5,000+</div>
                  <div className="stat-label">Procedures Performed</div>
                </div>
              </div>
              
              <div className="cta-row">
                <a className="btn btn-primary" href="/contact">Schedule Consultation</a>
                <a className="btn btn-outline" href="/pricing">View Pricing</a>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Treatment Categories</span>
              <h2>Organized by Specialty</h2>
              <p className="lead">Our comprehensive menu of medical aesthetic treatments, organized by clinical specialty for easy navigation.</p>
            </div>

            <div className="treatment-categories">
              {/* Injectable Treatments */}
              <div className="treatment-category">
                <div className="category-header">
                  <div className="category-icon">💉</div>
                  <div>
                    <h3>Injectable Treatments</h3>
                    <p>Neuromodulators and dermal fillers for facial enhancement</p>
                  </div>
                </div>
                
                <div className="treatment-grid">
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1616394584738-fc6e61280a58?q=80&w=600&auto=format&fit=crop" alt="Botox treatment" />
                    <div className="treatment-content">
                      <h4>Botox & Dysport</h4>
                      <div className="treatment-details">
                        <span className="duration">30 minutes</span>
                        <span className="downtime">No downtime</span>
                        <span className="results">3-4 months</span>
                      </div>
                      <p>FDA-approved neurotoxins to reduce dynamic wrinkles and fine lines. Expert injection technique for natural-looking results.</p>
                      <ul className="treatment-benefits">
                        <li>Forehead lines</li>
                        <li>Crow's feet</li>
                        <li>Frown lines</li>
                        <li>Brow lift</li>
                      </ul>
                      <div className="price-range">Starting at $12/unit</div>
                    </div>
                  </div>
                  
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=600&auto=format&fit=crop" alt="Dermal filler treatment" />
                    <div className="treatment-content">
                      <h4>Dermal Fillers</h4>
                      <div className="treatment-details">
                        <span className="duration">45-60 minutes</span>
                        <span className="downtime">Minimal</span>
                        <span className="results">12-18 months</span>
                      </div>
                      <p>Hyaluronic acid fillers to restore volume, enhance contours, and smooth wrinkles with precision placement.</p>
                      <ul className="treatment-benefits">
                        <li>Lip enhancement</li>
                        <li>Cheek augmentation</li>
                        <li>Nasolabial folds</li>
                        <li>Under-eye hollows</li>
                      </ul>
                      <div className="price-range">Starting at $650/syringe</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laser Treatments */}
              <div className="treatment-category">
                <div className="category-header">
                  <div className="category-icon">🔬</div>
                  <div>
                    <h3>Laser & Energy Treatments</h3>
                    <p>Advanced laser technologies for skin rejuvenation and correction</p>
                  </div>
                </div>
                
                <div className="treatment-grid">
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1591348278926-10e7872f4fe7?q=80&w=600&auto=format&fit=crop" alt="Fractional CO2 laser" />
                    <div className="treatment-content">
                      <h4>Fractional CO2 Laser</h4>
                      <div className="treatment-details">
                        <span className="duration">60-90 minutes</span>
                        <span className="downtime">7-10 days</span>
                        <span className="results">Permanent improvement</span>
                      </div>
                      <p>Gold standard for skin resurfacing. Dramatically improves skin texture, tone, and reduces signs of aging.</p>
                      <ul className="treatment-benefits">
                        <li>Deep wrinkles</li>
                        <li>Acne scarring</li>
                        <li>Sun damage</li>
                        <li>Skin tightening</li>
                      </ul>
                      <div className="price-range">$2,500-$4,000/treatment</div>
                    </div>
                  </div>
                  
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop" alt="IPL photofacial" />
                    <div className="treatment-content">
                      <h4>IPL Photofacial</h4>
                      <div className="treatment-details">
                        <span className="duration">30-45 minutes</span>
                        <span className="downtime">Minimal</span>
                        <span className="results">Progressive improvement</span>
                      </div>
                      <p>Intense pulsed light to target pigmentation, rosacea, and sun damage for clearer, more even-toned skin.</p>
                      <ul className="treatment-benefits">
                        <li>Age spots</li>
                        <li>Rosacea</li>
                        <li>Broken capillaries</li>
                        <li>Overall skin tone</li>
                      </ul>
                      <div className="price-range">$350-$500/session</div>
                    </div>
                  </div>
                  
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format&fit=crop" alt="Laser hair removal" />
                    <div className="treatment-content">
                      <h4>Laser Hair Removal</h4>
                      <div className="treatment-details">
                        <span className="duration">15-60 minutes</span>
                        <span className="downtime">None</span>
                        <span className="results">Permanent reduction</span>
                      </div>
                      <p>Medical-grade laser technology for safe, effective permanent hair reduction on all skin types.</p>
                      <ul className="treatment-benefits">
                        <li>All body areas</li>
                        <li>All skin types</li>
                        <li>Precision targeting</li>
                        <li>Comfortable treatment</li>
                      </ul>
                      <div className="price-range">$150-$800/session</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Skincare */}
              <div className="treatment-category">
                <div className="category-header">
                  <div className="category-icon">⚕️</div>
                  <div>
                    <h3>Medical Skincare</h3>
                    <p>Evidence-based treatments for medical and cosmetic concerns</p>
                  </div>
                </div>
                
                <div className="treatment-grid">
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=600&auto=format&fit=crop" alt="Chemical peel" />
                    <div className="treatment-content">
                      <h4>Chemical Peels</h4>
                      <div className="treatment-details">
                        <span className="duration">30-45 minutes</span>
                        <span className="downtime">3-7 days</span>
                        <span className="results">Immediate improvement</span>
                      </div>
                      <p>Customized chemical peels from light to deep penetration for various skin concerns and goals.</p>
                      <ul className="treatment-benefits">
                        <li>Acne treatment</li>
                        <li>Hyperpigmentation</li>
                        <li>Fine lines</li>
                        <li>Skin texture</li>
                      </ul>
                      <div className="price-range">$150-$600/peel</div>
                    </div>
                  </div>
                  
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=600&auto=format&fit=crop" alt="Microneedling" />
                    <div className="treatment-content">
                      <h4>Microneedling & RF</h4>
                      <div className="treatment-details">
                        <span className="duration">60 minutes</span>
                        <span className="downtime">1-2 days</span>
                        <span className="results">Progressive tightening</span>
                      </div>
                      <p>Advanced microneedling with radiofrequency to stimulate collagen and improve skin texture and firmness.</p>
                      <ul className="treatment-benefits">
                        <li>Acne scars</li>
                        <li>Skin tightening</li>
                        <li>Pore reduction</li>
                        <li>Overall texture</li>
                      </ul>
                      <div className="price-range">$400-$800/session</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Treatments */}
              <div className="treatment-category">
                <div className="category-header">
                  <div className="category-icon">🏃‍♀️</div>
                  <div>
                    <h3>Body Contouring</h3>
                    <p>Non-invasive body shaping and skin tightening technologies</p>
                  </div>
                </div>
                
                <div className="treatment-grid">
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600&auto=format&fit=crop" alt="CoolSculpting treatment" />
                    <div className="treatment-content">
                      <h4>CoolSculpting Elite</h4>
                      <div className="treatment-details">
                        <span className="duration">35-60 minutes</span>
                        <span className="downtime">None</span>
                        <span className="results">2-4 months</span>
                      </div>
                      <p>FDA-cleared fat freezing technology to eliminate stubborn fat cells permanently without surgery.</p>
                      <ul className="treatment-benefits">
                        <li>Abdomen</li>
                        <li>Love handles</li>
                        <li>Double chin</li>
                        <li>Thighs</li>
                      </ul>
                      <div className="price-range">$750-$1,500/cycle</div>
                    </div>
                  </div>
                  
                  <div className="treatment-item">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop" alt="Body tightening treatment" />
                    <div className="treatment-content">
                      <h4>Radiofrequency Skin Tightening</h4>
                      <div className="treatment-details">
                        <span className="duration">45-60 minutes</span>
                        <span className="downtime">None</span>
                        <span className="results">Progressive improvement</span>
                      </div>
                      <p>Non-invasive radiofrequency technology to tighten loose skin and improve body contours.</p>
                      <ul className="treatment-benefits">
                        <li>Loose skin</li>
                        <li>Cellulite reduction</li>
                        <li>Body contouring</li>
                        <li>Skin texture</li>
                      </ul>
                      <div className="price-range">$400-$800/session</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="section" style={{ background: 'var(--secondary-gray)' }}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Our Process</span>
              <h2>What to Expect</h2>
              <p className="lead">A comprehensive approach to aesthetic medicine with your safety and satisfaction as our top priorities.</p>
            </div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Consultation & Assessment</h4>
                  <p>Comprehensive skin analysis and medical history review to determine the best treatment approach for your goals.</p>
                  <ul>
                    <li>Medical-grade skin analysis</li>
                    <li>Goal-setting discussion</li>
                    <li>Treatment plan customization</li>
                    <li>Realistic expectation setting</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Pre-Treatment Preparation</h4>
                  <p>Detailed preparation instructions and skincare regimen to optimize your treatment results and minimize complications.</p>
                  <ul>
                    <li>Pre-treatment skincare protocol</li>
                    <li>Medication and supplement review</li>
                    <li>Lifestyle modification guidance</li>
                    <li>Consent form review</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Treatment Day</h4>
                  <p>Professional treatment in our state-of-the-art facility with the highest safety standards and comfort measures.</p>
                  <ul>
                    <li>Pre-treatment comfort measures</li>
                    <li>Precise treatment execution</li>
                    <li>Real-time monitoring</li>
                    <li>Immediate post-care instructions</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Follow-Up & Maintenance</h4>
                  <p>Comprehensive aftercare program to ensure optimal healing, results, and long-term skin health maintenance.</p>
                  <ul>
                    <li>Post-treatment monitoring</li>
                    <li>Progress photography</li>
                    <li>Maintenance planning</li>
                    <li>Ongoing skincare optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="highlight-box">
              <span className="eyebrow">Ready to Begin?</span>
              <h2>Schedule Your Treatment Consultation</h2>
              <p className="lead">Discuss your goals with our board-certified dermatologists and receive a personalized treatment plan tailored to your unique needs and aesthetic goals.</p>
              
              <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <a className="btn btn-primary" href="/contact">Book Consultation</a>
                <a className="btn btn-outline" href="/pricing">View All Pricing</a>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <ul className="feature-list" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <li>Complimentary consultations available</li>
                  <li>Same-day treatment options</li>
                  <li>Financing plans available</li>
                  <li>Board-certified providers only</li>
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

