import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BeforeAfter from '@/app/components/BeforeAfter'
import CountUp from '@/app/components/CountUp'

export const metadata: Metadata = {
  title: 'Patient Results Gallery',
  description: 'View real patient transformations from SkinBeauty MD. Before and after photos showcasing natural, professional aesthetic results.'
}

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main id="content">
        {/* Hero Section */}
        <section className="results-hero">
          <div className="container">
            <div className="results-hero-content">
              <span className="eyebrow">Patient Results</span>
              <h1>Real Transformations, Natural Results</h1>
              <p className="lead">Authentic before and after photos from our patients showcasing the subtle, refined outcomes that define our approach to aesthetic medicine.</p>
              
              <div className="results-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="stat-label">Documented Results</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUp end={95} suffix="%" />
                  </div>
                  <div className="stat-label">Patient Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Natural</div>
                  <div className="stat-label">Looking Outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Results by Treatment Category */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Results by Treatment Category</h2>
              <p className="lead">Browse our comprehensive gallery organized by treatment type to see the specific results you can expect.</p>
            </div>

            {/* Injectable Results */}
            <div className="results-category">
              <div className="category-header">
                <h3>Injectable Treatments</h3>
                <p>Subtle enhancements with Botox, Dysport, and dermal fillers for natural-looking rejuvenation.</p>
              </div>
              
              <div className="results-grid">
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/646/600/400?grayscale" 
                    after="https://picsum.photos/id/646/600/400" 
                  />
                  <div className="result-details">
                    <h4>Botox for Crow's Feet</h4>
                    <div className="result-info">
                      <span className="treatment">20 units Botox</span>
                      <span className="timeframe">3 weeks post-treatment</span>
                    </div>
                    <p>Significant reduction in fine lines while maintaining natural expression and movement.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1024/600/400?grayscale" 
                    after="https://picsum.photos/id/1024/600/400" 
                  />
                  <div className="result-details">
                    <h4>Lip Enhancement</h4>
                    <div className="result-info">
                      <span className="treatment">1ml Juvederm</span>
                      <span className="timeframe">2 weeks post-treatment</span>
                    </div>
                    <p>Enhanced lip volume and definition with natural proportions and soft feel.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1025/600/400?grayscale" 
                    after="https://picsum.photos/id/1025/600/400" 
                  />
                  <div className="result-details">
                    <h4>Cheek Augmentation</h4>
                    <div className="result-info">
                      <span className="treatment">2ml Voluma</span>
                      <span className="timeframe">4 weeks post-treatment</span>
                    </div>
                    <p>Restored volume and lifted contours for a more youthful facial profile.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Laser Results */}
            <div className="results-category">
              <div className="category-header">
                <h3>Laser & Energy Treatments</h3>
                <p>Advanced laser technologies for skin resurfacing, tightening, and rejuvenation.</p>
              </div>
              
              <div className="results-grid">
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1035/600/400?grayscale" 
                    after="https://picsum.photos/id/1035/600/400" 
                  />
                  <div className="result-details">
                    <h4>Fractional CO2 Resurfacing</h4>
                    <div className="result-info">
                      <span className="treatment">Full Face Treatment</span>
                      <span className="timeframe">3 months post-treatment</span>
                    </div>
                    <p>Dramatic improvement in skin texture, fine lines, and overall radiance with minimal downtime.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1037/600/400?grayscale" 
                    after="https://picsum.photos/id/1037/600/400" 
                  />
                  <div className="result-details">
                    <h4>IPL Photofacial</h4>
                    <div className="result-info">
                      <span className="treatment">Series of 3 treatments</span>
                      <span className="timeframe">6 weeks post-series</span>
                    </div>
                    <p>Even skin tone with reduced pigmentation and improved overall complexion clarity.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1041/600/400?grayscale" 
                    after="https://picsum.photos/id/1041/600/400" 
                  />
                  <div className="result-details">
                    <h4>Laser Hair Removal</h4>
                    <div className="result-info">
                      <span className="treatment">6 sessions - Underarm</span>
                      <span className="timeframe">8 weeks post-final session</span>
                    </div>
                    <p>Permanent hair reduction with smooth, irritation-free skin and lasting results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Skincare Results */}
            <div className="results-category">
              <div className="category-header">
                <h3>Medical Skincare</h3>
                <p>Professional treatments for acne, pigmentation, and overall skin health improvement.</p>
              </div>
              
              <div className="results-grid">
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/237/600/400?grayscale" 
                    after="https://picsum.photos/id/237/600/400" 
                  />
                  <div className="result-details">
                    <h4>Chemical Peel Series</h4>
                    <div className="result-info">
                      <span className="treatment">TCA Peel (3 sessions)</span>
                      <span className="timeframe">8 weeks post-series</span>
                    </div>
                    <p>Improved acne scarring and skin texture with enhanced radiance and clarity.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1003/600/400?grayscale" 
                    after="https://picsum.photos/id/1003/600/400" 
                  />
                  <div className="result-details">
                    <h4>Microneedling with RF</h4>
                    <div className="result-info">
                      <span className="treatment">4 treatments over 4 months</span>
                      <span className="timeframe">3 months post-series</span>
                    </div>
                    <p>Significant pore reduction and skin tightening with improved overall texture.</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1008/600/400?grayscale" 
                    after="https://picsum.photos/id/1008/600/400" 
                  />
                  <div className="result-details">
                    <h4>Acne Treatment Program</h4>
                    <div className="result-info">
                      <span className="treatment">6-month comprehensive plan</span>
                      <span className="timeframe">6 months treatment</span>
                    </div>
                    <p>Clear, healthy skin achieved through customized medical-grade skincare regimen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials with Results */}
        <section className="section" style={{ background: 'var(--secondary-gray)' }}>
          <div className="container">
            <div className="section-header">
              <h2>What Our Patients Say</h2>
              <p className="lead">Real feedback from patients about their treatment experience and results.</p>
            </div>
            
            <div className="testimonials-with-results">
              <div className="testimonial-result">
                <div className="testimonial-content">
                  <div className="stars">★★★★★</div>
                  <blockquote>
                    "Dr. Mitchell achieved exactly what I was hoping for - I look like myself, just more refreshed. The results are so natural that people just comment I look great!"
                  </blockquote>
                  <div className="patient-info">
                    <div className="patient-details">
                      <strong>Sarah K.</strong>
                      <span>Botox & Filler Patient</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-image">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1011/400/400?grayscale" 
                    after="https://picsum.photos/id/1011/400/400" 
                  />
                </div>
              </div>
              
              <div className="testimonial-result">
                <div className="testimonial-content">
                  <div className="stars">★★★★★</div>
                  <blockquote>
                    "The CO2 laser treatment transformed my skin. The improvement in texture and tone exceeded my expectations, and the downtime was exactly as described."
                  </blockquote>
                  <div className="patient-info">
                    <div className="patient-details">
                      <strong>Michael R.</strong>
                      <span>Laser Resurfacing Patient</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-image">
                  <BeforeAfter 
                    before="https://picsum.photos/id/1015/400/400?grayscale" 
                    after="https://picsum.photos/id/1015/400/400" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process & Results Timeline */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Understanding Your Results Timeline</h2>
              <p className="lead">Each treatment has its own timeline for optimal results. Here's what you can expect.</p>
            </div>
            
            <div className="results-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h4>Immediate Post-Treatment</h4>
                  <div className="timeline-details">
                    <div className="timeline-treatments">
                      <span className="treatment-tag">Botox</span>
                      <span className="treatment-tag">Fillers</span>
                      <span className="treatment-tag">Laser</span>
                    </div>
                    <p>Some treatments show immediate improvement, while others begin the healing process. We provide detailed aftercare instructions.</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h4>1-2 Weeks</h4>
                  <div className="timeline-details">
                    <div className="timeline-treatments">
                      <span className="treatment-tag">Botox Effects Begin</span>
                      <span className="treatment-tag">Filler Settling</span>
                    </div>
                    <p>Injectable treatments begin showing results as muscles relax and swelling subsides. Most patients see significant improvement.</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h4>4-6 Weeks</h4>
                  <div className="timeline-details">
                    <div className="timeline-treatments">
                      <span className="treatment-tag">Peak Injectable Results</span>
                      <span className="treatment-tag">Skin Healing Complete</span>
                    </div>
                    <p>Full results from injectable treatments are visible. Skin treatments show improved texture and tone as healing completes.</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h4>3-6 Months</h4>
                  <div className="timeline-details">
                    <div className="timeline-treatments">
                      <span className="treatment-tag">Long-term Results</span>
                      <span className="treatment-tag">Collagen Production</span>
                    </div>
                    <p>Collagen-stimulating treatments reach peak effectiveness. This is when we typically schedule follow-up assessments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ background: 'var(--surface-accent)' }}>
          <div className="container">
            <div className="highlight-box">
              <span className="eyebrow">Ready for Your Transformation?</span>
              <h2>Schedule Your Consultation</h2>
              <p className="lead">See how we can help you achieve natural, beautiful results that enhance your unique features.</p>
              
              <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <a className="btn btn-primary" href="/contact">Book Consultation</a>
                <a className="btn btn-outline" href="/treatments">View Treatments</a>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <ul className="feature-list" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <li>Complimentary consultation with result photos</li>
                  <li>Personalized treatment planning</li>
                  <li>Before & after photography included</li>
                  <li>Follow-up care and monitoring</li>
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
