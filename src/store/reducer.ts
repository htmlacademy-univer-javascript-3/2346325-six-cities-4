import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCity, setSelectedOffer, setSortType, setOffers, setOffersLoadingState, setAuthorizationStatus, setError, setOfferPage, clearOfferPage, } from './action';
import { Cities } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offers';
import { AuthorizationStatus, SortTypes } from '../const';
import { OfferPage } from '../types/offers';

type StateType = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
  selectedSortType: string;
  offersLoadingState: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  offerPage: OfferPage;

};

const initialState: StateType = {
  city: Cities[0],
  offers: [],
  selectedOffer: undefined,
  selectedSortType: SortTypes.Popular,
  offersLoadingState: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  offerPage: {
    offer: undefined,
    nearOffers: [],
    reviews: []
  },
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOfferPage, (state, action) => {
      state.offerPage = action.payload;
    })
    .addCase(clearOfferPage, (state) => {
      state.offerPage = {
        offer: undefined,
        nearOffers: [],
        reviews: []
      };
    })
    .addCase(addReview, (state, action) => {
      state.offerPage.reviews = [...state.offerPage.reviews, action.payload];
    });
});

export { reducer };
