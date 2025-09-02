import type { Metadata } from 'next'
import './globals.css'

const siteName = 'SkinBeauty MD'
const siteUrl = 'https://www.skinbeautymd.com'
const siteDescription = 'Board-certified providers delivering refined, natural aesthetic dermatology with advanced lasers and injectables.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Refined Aesthetic Dermatology`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} | Refined Aesthetic Dermatology` ,
    description: siteDescription,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
        width: 1600, height: 900, alt: 'SkinBeauty MD'
      }
    ]
  },
  twitter: { card: 'summary_large_image', title: siteName, description: siteDescription },
  robots: { index: true, follow: true },
  themeColor: '#0f1115'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'MedicalBusiness', name: siteName, url: siteUrl, telephone: '+10000000000' })
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  )
}

