import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSelectedOffer, changeSelectedOfferNearby, getOffers } from './action';
import { offers } from '../mocks/offers';
import { Cities } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offers';

type StateType = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
  offersNearby: Offer[];
  selectedOfferNearby: Offer | undefined;
}

const initialState: StateType = {
  city: Cities[0],
  offers: offers,
  selectedOffer: undefined,
  offersNearby: offers,
  selectedOfferNearby: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
  builder
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
  builder
    .addCase(changeSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    });
  builder
    .addCase(changeSelectedOfferNearby, (state, action) => {
      state.selectedOfferNearby = action.payload;
    });
});

export {reducer};
