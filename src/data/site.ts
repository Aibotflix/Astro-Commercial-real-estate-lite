import rawSite from './site.json'
import rawListings from './listings.json'
import rawAgents from './agents.json'

export const site = { ...rawSite }

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export const agents = rawAgents.map((a) => ({ ...a }))

export const listings = rawListings.map((l) => ({
  ...l,
  slug: slugify(l.title),
}))
