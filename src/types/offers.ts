import { OfferType } from "../const";
import { Review } from "./reviews";

export type Offer = {
  id: number;
  name: string;
  description: string;
  isPremium: boolean;
  type: OfferType;
  rating: number;
  bedrooms: number;
  maxGuests: number;
  price: number;
  content: string[];
  photos: string[];
  isFavourite: boolean;
  reviews: Review[];
}

export type Offers = Offer[];
