import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offers';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../../const';
import { favoriteDataType } from '../../../types/offers';
import { updateFewOffers } from '../few-offers';
import { updateSingleOffer } from '../single-offer/single-offer-data';
import { updateFewFavorites } from './favorites-data';
import { updateFewNearby } from '../near-offers/near-offers-data';

export const fetchfavoritesAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.favoritesData}/fetchfavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changefavoriteStatusAction = createAsyncThunk<
  Offer,
  favoriteDataType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.favoritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<Offer>(
        `${APIRoute.Favorite}/${offerId}/${status ? 0 : 1}`
      );

      dispatch(updateFewOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateFewFavorites(data));
      dispatch(updateFewNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
