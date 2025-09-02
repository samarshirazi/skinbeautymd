import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BeforeAfter from '@/app/components/BeforeAfter'

export const metadata: Metadata = { title: 'Results', description: 'Before and after gallery from SkinBeauty MD. Real patient results with natural, refined outcomes.' }

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="section">
          <div className="container">
            <span className="eyebrow">Results</span>
            <h1>Before & After Gallery</h1>
            <p className="lead">Real patients, natural results. Slide to compare outcomes.</p>
            <div className="divider" />
            <div className="grid grid-3">
              <BeforeAfter before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1519751138087-5a4a1e14ef91?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop" />
              <BeforeAfter before="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop" after="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

