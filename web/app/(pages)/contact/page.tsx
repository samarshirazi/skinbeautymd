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
          <div className="container" style={{ maxWidth: 960 }}>
            <div className="consultation-header">
              <span className="eyebrow">Schedule Your Visit</span>
              <h1>Book Your Consultation</h1>
              <p className="lead">Begin your journey to healthier, more beautiful skin with a personalized consultation from our board-certified dermatologists.</p>
              
              <div className="consultation-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">👨‍⚕️</div>
                  <div>
                    <strong>Expert Evaluation</strong>
                    <p>Comprehensive skin analysis by board-certified dermatologists</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📋</div>
                  <div>
                    <strong>Personalized Plan</strong>
                    <p>Customized treatment recommendations based on your goals</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⏰</div>
                  <div>
                    <strong>No Rush Policy</strong>
                    <p>Take the time you need to make informed decisions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="consultation-form-container">
              <form className="consultation-form" aria-label="Consultation booking form">
                <div className="form-section">
                  <h3>Personal Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="john.smith@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <select id="age" name="age">
                        <option value="">Select age range</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-55">46-55</option>
                        <option value="56-65">56-65</option>
                        <option value="65+">65+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="referral">How did you hear about us?</label>
                      <select id="referral" name="referral">
                        <option value="">Select one</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend-family">Friend/Family Referral</option>
                        <option value="physician">Physician Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Consultation Type</h3>
                  
                  <div className="consultation-types">
                    <label className="consultation-option">
                      <input type="radio" name="consultationType" value="in-person" defaultChecked />
                      <div className="option-content">
                        <strong>In-Person Consultation</strong>
                        <p>Comprehensive evaluation at our practice</p>
                        <span className="price">Complimentary</span>
                      </div>
                    </label>
                    
                    <label className="consultation-option">
                      <input type="radio" name="consultationType" value="virtual" />
                      <div className="option-content">
                        <strong>Virtual Consultation</strong>
                        <p>Initial assessment via video call</p>
                        <span className="price">$50 (applied to treatment)</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Treatment Interests</h3>
                  <p className="form-help">Select all treatments you're interested in learning about:</p>
                  
                  <div className="treatment-checkboxes">
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="botox" />
                      <span className="checkmark"></span>
                      Botox & Neurotoxins
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="fillers" />
                      <span className="checkmark"></span>
                      Dermal Fillers
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="laser-resurfacing" />
                      <span className="checkmark"></span>
                      Laser Resurfacing
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="laser-hair-removal" />
                      <span className="checkmark"></span>
                      Laser Hair Removal
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="chemical-peels" />
                      <span className="checkmark"></span>
                      Chemical Peels
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="microneedling" />
                      <span className="checkmark"></span>
                      Microneedling
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="body-contouring" />
                      <span className="checkmark"></span>
                      Body Contouring
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="medical-skincare" />
                      <span className="checkmark"></span>
                      Medical Skincare
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="acne-treatment" />
                      <span className="checkmark"></span>
                      Acne Treatment
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="treatments" value="skin-cancer-screening" />
                      <span className="checkmark"></span>
                      Skin Cancer Screening
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Scheduling Preferences</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <input id="preferredDate" name="preferredDate" type="date" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <select id="preferredTime" name="preferredTime">
                        <option value="">Select time preference</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeFlexibility">Schedule Flexibility</label>
                    <select id="timeFlexibility" name="timeFlexibility">
                      <option value="">How flexible is your schedule?</option>
                      <option value="very-flexible">Very flexible - any time works</option>
                      <option value="somewhat-flexible">Somewhat flexible - prefer certain days</option>
                      <option value="specific-times">Need specific times only</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Additional Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="primaryConcern">Primary Skin Concern</label>
                    <select id="primaryConcern" name="primaryConcern">
                      <option value="">Select your main concern</option>
                      <option value="aging-wrinkles">Aging & Wrinkles</option>
                      <option value="acne-scarring">Acne & Scarring</option>
                      <option value="sun-damage">Sun Damage & Pigmentation</option>
                      <option value="volume-loss">Volume Loss</option>
                      <option value="skin-texture">Skin Texture & Tone</option>
                      <option value="preventive-care">Preventive Care</option>
                      <option value="medical-concern">Medical Skin Concern</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="previousTreatments">Previous Aesthetic Treatments</label>
                    <textarea 
                      id="previousTreatments" 
                      name="previousTreatments" 
                      rows={3} 
                      placeholder="Please list any previous aesthetic treatments, including when and where (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="goals">Treatment Goals & Expectations</label>
                    <textarea 
                      id="goals" 
                      name="goals" 
                      rows={4} 
                      placeholder="Describe what you hope to achieve and any specific areas of concern..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Treatment Budget</label>
                    <select id="budget" name="budget">
                      <option value="">Select budget range (optional)</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                      <option value="discuss">Prefer to discuss in consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Consent & Communication</h3>
                  
                  <div className="consent-checkboxes">
                    <label className="checkbox-item required">
                      <input type="checkbox" name="consent-contact" required />
                      <span className="checkmark"></span>
                      I consent to being contacted by SkinBeauty MD via phone, email, or text to schedule my consultation and receive appointment reminders. *
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="consent-marketing" />
                      <span className="checkmark"></span>
                      I would like to receive educational content and special offers about treatments and skincare (optional).
                    </label>
                    
                    <label className="checkbox-item">
                      <input type="checkbox" name="consent-photos" />
                      <span className="checkmark"></span>
                      I consent to before/after photography for treatment documentation (photos remain confidential unless I provide separate consent for marketing use).
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary btn-large" type="submit">
                    Schedule My Consultation
                  </button>
                  
                  <div className="alternative-contact">
                    <p>Prefer to speak with someone directly?</p>
                    <div className="contact-options">
                      <a className="btn btn-outline" href="tel:+1-555-SKIN-MD">
                        📞 Call (555) SKIN-MD
                      </a>
                      <a className="btn btn-outline" href="mailto:consultations@skinbeautymd.com">
                        ✉️ Email Us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="form-footer">
                  <div className="privacy-notice">
                    <p><strong>Your Privacy is Protected</strong></p>
                    <p>All information is kept strictly confidential and used only for scheduling your consultation and providing requested services. We never share your information with third parties.</p>
                    <p><small>By submitting this form, you acknowledge you have read our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.</small></p>
                  </div>
                  
                  <div className="next-steps">
                    <h4>What Happens Next?</h4>
                    <ol>
                      <li>We'll review your information within 4 business hours</li>
                      <li>Our patient coordinator will contact you to confirm your appointment</li>
                      <li>You'll receive appointment details and preparation instructions</li>
                      <li>Attend your consultation with Dr. Mitchell</li>
                    </ol>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
