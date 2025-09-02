import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Blog', description: 'Expert insights from SkinBeauty MD on lasers, injectables, skincare and more.' }

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">Blog</span>
            <h1>Insights & Education</h1>
            <p className="lead">Expert guidance to make confident, informed choices for your skin.</p>
            <div className="divider" />
            <div className="grid grid-3">
              <Link className="card" href="/blog/your-guide-to-modern-lasers"><img className="card-media" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop" alt="Laser guide" /><div className="card-body"><div className="card-title">Your Guide to Modern Lasers</div><div className="card-text">Downtime, devices, and who it’s for.</div></div></Link>
              <Link className="card" href="/blog/natural-looking-injectables"><img className="card-media" src="https://images.unsplash.com/photo-1515468381879-40d0ded81016?q=80&w=1200&auto=format&fit=crop" alt="Injectables" /><div className="card-body"><div className="card-title">Natural‑Looking Injectables</div><div className="card-text">Ratios, landmarks, and safety.</div></div></Link>
              <Link className="card" href="/blog/skin-health-simplified"><img className="card-media" src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop" alt="Skincare" /><div className="card-body"><div className="card-title">Skin Health, Simplified</div><div className="card-text">Evidence‑based routines that actually work.</div></div></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

