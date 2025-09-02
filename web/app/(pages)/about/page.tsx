import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = { title: 'About', description: 'SkinBeauty MD is a boutique aesthetic dermatology practice focused on refined, natural results.' }

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">About</span>
            <h1>Our Philosophy</h1>
            <p className="lead">We believe aesthetic medicine should be subtle, safe, and sophisticated—enhancing what makes you uniquely you.</p>
            <div className="divider" />
            <p>At SkinBeauty MD, we combine medical expertise with a modern aesthetic to deliver refined outcomes. We focus on education, conservative dosing, and long‑term skin health.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

