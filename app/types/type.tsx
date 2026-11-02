export interface IData {
  id: string
  title: string
  image: string
  category: string
  hourlyRate: number
  ratingBadge: string
  location: string
}

export type Studio = {
  _id: string
  title: string
  category: string
  location: string
  imageURL: string
  hourlyRate: number
  securityDeposit?: number
  capacity: number
  rating: number
  reviews: number
  amenities: string[]
  overview?: string
}
