import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offers';

export const changeCity = createAction('changeCity', (city: City) => ({
  payload: city,
}));
export const getOffers = createAction('getOffers', (Offers: Offer[]) => ({
  payload: Offers,
}));
export const setSelectedOffer = createAction(
  'selectOffer',
  (offer: Offer | undefined) => ({ payload: offer })
);
export const setSortType = createAction('setSortType', (sortType: string) => ({
  payload: sortType,
}));

export const setOffers = createAction('setOffers', (Offers: Offer[]) => ({payload: Offers}));

export const setOffersLoadingState = createAction('setOffersLoadingState', (state: boolean) => ({payload: state}));
