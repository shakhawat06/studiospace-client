export interface IData {
  id: string;
  title: string;
  image: string;
  category: string;
  hourlyRate: number;
  ratingBadge: string;
  location: string;
}

export type Studio = {
  _id: string
  title: string
  category: string
  location: string
  imageURL: string
  hourlyRate: string
  securityDeposit?: number
  maxCapacity: number
  rating: number
  reviews: number
  amenities: string[]
  overview?: string
}

export type Booking = {
  "_id": string,
  "name": string,
  "email": string,
  "title": string,
  "category": string,
  "hourlyRate": number,
  "securityDeposit": number,
  "maxCapacity": number,
  "location": string,
  "imageURL": string,
  "amenities": string[],
  "overview": string,
  "owner": {
    email: string,
    name: string
  },
  "departureDate": string,
  "bookingDate": string
}