import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, OfferPage } from '../types/offers';
import { Review } from '../types/reviews';
import { AuthorizationStatus } from '../const';

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

export const setError = createAction('setError', (message: string | null) => ({payload: message}));

export const setAuthorizationStatus = createAction('setAuthorizationStatus', (status: AuthorizationStatus) => ({payload: status}));

export const setOfferPage = createAction('setOfferPage', (offerPage: OfferPage) => ({payload: offerPage}));

export const clearOfferPage = createAction('clearOfferPage');

export const addReview = createAction('addReview', (rewiew: Review) => ({payload: rewiew}));

