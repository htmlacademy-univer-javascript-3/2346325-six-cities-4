import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setSelectedOffer,
  setSortType,
  getOffers,
} from './action';
import { offers } from '../mocks/offers';
import { Cities } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offers';
import { SortTypes } from '../const';

type StateType = {
  city: City;
  offers: Offer[];
  offersNearby: Offer[];
  selectedOffer: Offer | undefined;
  selectedSortType: string;
};

const initialState: StateType = {
  city: Cities[0],
  offers: offers,
  selectedOffer: undefined,
  offersNearby: offers,
  selectedSortType: SortTypes.Popular,
};

const reducer = createReducer(initialState, (builder) => {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(getOffers, (state) => {
        state.offers = offers;
      })
      .addCase(setSelectedOffer, (state, action) => {
        state.selectedOffer = action.payload;
      })
      .addCase(setSortType, (state, action) => {
        state.selectedSortType = action.payload;
      });
  });

export { reducer };
