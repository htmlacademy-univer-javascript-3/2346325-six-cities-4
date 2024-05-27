import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setSelectedOffer, setSortType, setOffers, setOffersLoadingState } from './action';
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
  offersLoadingState: boolean;
};

const initialState: StateType = {
  city: Cities[0],
  offers: [],
  selectedOffer: undefined,
  offersNearby: offers,
  selectedSortType: SortTypes.Popular,
  offersLoadingState: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.selectedSortType = action.payload;
    })
    .addCase(setOffersLoadingState, (state, action) => {
      state.offersLoadingState = action.payload;
    });
});

export { reducer };
