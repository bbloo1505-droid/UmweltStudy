import { useMemo, useState } from 'react'
import { omniSearch } from './indexData'

export function useOmniSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const results = useMemo(() => omniSearch(query), [query])

  return { query, setQuery, open, setOpen, results }
}

