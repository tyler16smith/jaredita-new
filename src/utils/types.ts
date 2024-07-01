// types.ts (global)

export type SponsorshipType = "individual" | "family" | "orphanage" | null
export type TSponsorshipOption = {
  id: string
  title: string
  type: SponsorshipType,
  description: string
  icon: React.ReactNode
  highlight: boolean
  coverImage: string
  content: React.ReactNode
}