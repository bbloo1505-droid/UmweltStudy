export type PhotoAttribution = {
  id: string
  title: string
  url: string
  photographer: string
  photographerUrl: string
  license: 'Unsplash License'
}

// Note: These are decorative UI photos (not study content sources).
// If you prefer only government/Umwelt imagery, say so and we’ll swap them out.
export const photoAttributions: PhotoAttribution[] = [
  {
    id: 'eucalypt-bushland',
    title: 'Eucalypt bushland (Australia)',
    url: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?auto=format&fit=crop&w=1600&q=80',
    photographer: 'Annie Spratt',
    photographerUrl: 'https://unsplash.com/@anniespratt',
    license: 'Unsplash License',
  },
  {
    id: 'australian-dunes',
    title: 'Coastal dunes (Australia)',
    url: 'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80',
    photographer: 'Dan Freeman',
    photographerUrl: 'https://unsplash.com/@danfreemanphoto',
    license: 'Unsplash License',
  },
  {
    id: 'wetland-reeds',
    title: 'Wetland reeds',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80',
    photographer: 'Benjamin Voros',
    photographerUrl: 'https://unsplash.com/@benjaminvoros',
    license: 'Unsplash License',
  },
]

export const heroPhotos = {
  dashboard: 'eucalypt-bushland',
  glossary: 'wetland-reeds',
  library: 'australian-dunes',
  interview: 'eucalypt-bushland',
  scenarios: 'australian-dunes',
  workflow: 'wetland-reeds',
} as const

