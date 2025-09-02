import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = { title: 'Pricing & Financing', description: 'SkinBeauty MD transparent pricing and financing options. Invest in your best skin with flexible plans.' }

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">Pricing</span>
            <h1>Transparent, Flexible Options</h1>
            <p className="lead">We provide clear pricing ranges and offer financing via trusted partners—so you can plan confidently.</p>
            <div className="divider" />
            <div className="grid grid-3">
              <div className="card"><div className="card-body"><div className="card-title">Consultation</div><div className="card-text">$150 – Applied to treatment when booked.</div></div></div>
              <div className="card"><div className="card-body"><div className="card-title">Neuromodulators</div><div className="card-text">$12–$18 per unit • Typical 20–60 units</div></div></div>
              <div className="card"><div className="card-body"><div className="card-title">Filler</div><div className="card-text">$650–$950 per syringe • Package savings available</div></div></div>
              <div className="card"><div className="card-body"><div className="card-title">Laser Resurfacing</div><div className="card-text">$750–$3,500 • Depends on area and device</div></div></div>
              <div className="card"><div className="card-body"><div className="card-title">Microneedling RF</div><div className="card-text">$450–$1,200 • Packages of 3 recommended</div></div></div>
              <div className="card"><div className="card-body"><div className="card-title">Body Contouring</div><div className="card-text">Custom quotes after assessment</div></div></div>
            </div>
            <div className="divider" />
            <p className="muted">Financing available with Cherry and CareCredit.</p>
            <div className="logo-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Cherry" src="https://dummyimage.com/110x28/ffffff/000000&text=Cherry" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="CareCredit" src="https://dummyimage.com/130x28/ffffff/000000&text=CareCredit" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

