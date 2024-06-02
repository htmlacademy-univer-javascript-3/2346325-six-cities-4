import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, NameSpace } from '../../../const';
import { redirectToRoute } from '../../action';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../../types/offers';

export const fetchOfferAction = createAsyncThunk<
Offer | null,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  }
);
