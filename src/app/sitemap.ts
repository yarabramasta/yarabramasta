import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'daily',
      lastModified: new Date(),
      priority: 0.7,
      url: 'https://ybrmst.dev/'
    }
  ]
}
