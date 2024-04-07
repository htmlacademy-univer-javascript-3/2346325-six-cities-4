import { OfferType } from '../const';
import { Review } from './reviews';
import { Location, City } from './city';

export type Offer = {
  id: number;
  tittle: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavourite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  previewImage: string;
  maxAdults: number;
  reviews: Review[];
};

export type Offers = Offer[];
