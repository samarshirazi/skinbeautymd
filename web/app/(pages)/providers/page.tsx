import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = { title: 'Providers', description: 'Meet the team at SkinBeauty MD: board-certified dermatology providers, laser specialists, and aesthetic injectors.' }

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">Providers</span>
            <h1>Meet the Team</h1>
            <p className="lead">Aesthetic expertise grounded in medical training. We take a conservative, natural‑first approach—because subtle is sophisticated.</p>
            <div className="divider" />
            <div className="grid grid-3">
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1551301622-6fa49d2b8cf5?q=80&w=1200&auto=format&fit=crop" alt="Provider" /><div className="card-body"><div className="card-title">Dr. Jane Smith, MD</div><div className="card-text">Board‑Certified Dermatologist • Laser & Injectables</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop" alt="Provider" /><div className="card-body"><div className="card-title">Alex Kim, PA‑C</div><div className="card-text">Aesthetic Injector • Skin Health</div></div></div>
              <div className="card"><img className="card-media" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop" alt="Provider" /><div className="card-body"><div className="card-title">Maya Patel, RN</div><div className="card-text">Laser Specialist • Patient Care</div></div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

