export function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[\u2019']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function includesQuery(text: string, query: string) {
  const q = normalize(query)
  if (!q) return false
  return normalize(text).includes(q)
}

