import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offers';

export const changeCity = createAction('changeCity', (City: City) => ({payload: City}));
export const getOffers = createAction('getOffers', (Offers: Offer[]) => ({payload: Offers}));
export const changeSelectedOffer = createAction('changeSelectedOffer', (Offer: Offer | undefined) => ({payload: Offer}));
export const changeSelectedOfferNearby = createAction('changeSelectedOfferNearby', (Offer: Offer | undefined) => ({payload: Offer}));
