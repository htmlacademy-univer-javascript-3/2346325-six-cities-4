import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../../../const';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../../types/offers';


export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.FewOffersData}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);
