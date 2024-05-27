import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { setOffers, setOffersLoadingState } from './action';
import { APIRoute } from '../const';


type ThunkArgs = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const loadOffers = createAsyncThunk<void, undefined, ThunkArgs>(
  'loadOffers',
  (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingState(true));
    api.get<Offer[]>(APIRoute.Offers)
      .then((response) => {
        dispatch(setOffers(response.data));
      })
      .catch(() => {
        dispatch(setOffers([]));
      })
      .finally(() => {
        dispatch(setOffersLoadingState(false));
      });
  }
);

/*export const loadOffer = createAsyncThunk<void, undefined, ThunkArgs>(
  'loadOffer',
  (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingState(true));
    api.get<Offer[]>(`${APIRoute.Offers}/${offerId}`)
      .then((response) => {
        dispatch(setOffers(response.data));
      })
      .catch(() => {
        dispatch(setOffers([]));
      })
      .finally(() => {
        dispatch(setOffersLoadingState(false));
      });
  }
);*/

