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
        <section className="section">
          <div className="container">
            <span className="eyebrow">Treatments</span>
            <h1>Signature Aesthetic Services</h1>
            <p className="lead">Personalized plans across lasers, injectables, and advanced skincare to help you look refreshed and confident.</p>
            <div className="divider" />
            <div className="grid grid-3">
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1591348278926-10e7872f4fe7?q=80&w=1200&auto=format&fit=crop" alt="Laser rejuvenation" /><div className="card-body"><div className="card-title">Laser Rejuvenation</div><div className="card-text">Fractional resurfacing, vascular and pigment correction.</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1616394584738-fc6e61280a58?q=80&w=1200&auto=format&fit=crop" alt="Injectables" /><div className="card-body"><div className="card-title">Injectables</div><div className="card-text">Neuromodulators and fillers with an anatomy‑first approach.</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop" alt="Skin programs" /><div className="card-body"><div className="card-title">Skin Programs</div><div className="card-text">Science‑driven skincare and maintenance.</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop" alt="Body contouring" /><div className="card-body"><div className="card-title">Body Contouring</div><div className="card-text">Non‑invasive tightening and sculpting devices.</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop" alt="Acne solutions" /><div className="card-body"><div className="card-title">Acne Solutions</div><div className="card-text">Clearer skin with targeted protocols.</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="Scar revision" /><div className="card-body"><div className="card-title">Scar Revision</div><div className="card-text">Textural refinement for confidence.</div></div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

