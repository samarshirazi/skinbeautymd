import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ')
  return { title, description: 'Educational article by SkinBeauty MD.' }
}

export default function BlogPostPage({ params }: Props) {
  const title = params.slug.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ')
  return (
    <>
      <Header />
      <main id="content">
        <article className="section">
          <div className="container" style={{ maxWidth: 860 }}>
            <span className="eyebrow">Article</span>
            <h1>{title}</h1>
            <p className="lead">A quick primer to help you understand options and outcomes.</p>
            <div className="divider" />
            <p>Replace this with CMS‑driven content. In production we’ll fetch by slug and render rich text with images and captions.</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

