import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = { title: 'Reviews', description: 'Read real patient reviews of SkinBeauty MD. Trusted aesthetic care with natural, refined outcomes.' }

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">Reviews</span>
            <h1>What Patients Are Saying</h1>
            <p className="lead">We’re grateful for our community. Read a selection of recent feedback below.</p>
            <div className="divider" />
            <div className="grid">
              <div className="review"><div className="stars">★★★★★</div><div>“I’ve been to several clinics—this is a different level of care.”</div><div className="reviewer">— L.C.</div></div>
              <div className="review"><div className="stars">★★★★★</div><div>“Professional, warm, and the results are exactly what I wanted.”</div><div className="reviewer">— T.N.</div></div>
              <div className="review"><div className="stars">★★★★★</div><div>“They listen. My face looks like me—just fresher.”</div><div className="reviewer">— M.P.</div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

