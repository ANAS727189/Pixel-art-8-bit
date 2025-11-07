import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixel-ui.vercel.app'
  
  // Component routes
  const componentSlugs = [
    'pixel-button',
    'pixel-card',
    'pixel-input',
    'pixel-badge',
    'pixel-checkbox',
    'pixel-select',
    'pixel-tabs',
    'pixel-accordion',
  ]
  
  const componentRoutes = componentSlugs.map((slug) => ({
    url: `${baseUrl}/docs/components/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs/components`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/examples`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...componentRoutes,
  ]
}
