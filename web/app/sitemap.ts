import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.skinbeautymd.com'
  const paths = ['','/treatments','/providers','/results','/reviews','/pricing','/blog','/about','/contact']
  return paths.map((p) => ({ url: `${base}${p}`, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 }))
}

