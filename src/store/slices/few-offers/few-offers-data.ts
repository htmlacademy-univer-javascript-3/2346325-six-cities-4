import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { fetchOffersAction } from './api-actions';
import { updateOffers } from './utils.ts';
import { Offer } from '../../../types/offers.ts';

type FewOffersData = {
  offers: Offer[];
  isOffersLoading: boolean;
  hasError: boolean;
};

const initialState: FewOffersData = {
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

export const fewOffersData = createSlice({
  name: NameSpace.FewOffersData,
  initialState,
  reducers: {
    updateFewOffers: (state, action: PayloadAction<Offer>) => {
      updateOffers(state.offers, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersLoading = false;
      });
  },
});

export const { updateFewOffers: updateFewOffers } = fewOffersData.actions;
