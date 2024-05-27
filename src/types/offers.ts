import { OfferType } from '../const';
import { Reviews } from './reviews';
import { Location, City } from './city';

export type Offer = {
  id: number;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
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
  reviews: Reviews;
};

export type Offers = Offer[];
