import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, Offers } from '../types/offers';
import { store } from '.';
import { addReview, setOfferPage, setOffers, setOffersLoadingState, setAuthorizationStatus, setError, } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { AuthData, User} from '../types/user';
import { dropToken, saveToken } from '../api/token';
import { Review, CommentFormDataType, Reviews } from '../types/reviews';

const TIMEOUT_SHOW_ERROR = 2000;

type ThunkArgs = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const clearError = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }
>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }
>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }
>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);


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

export const loadOfferPage = createAsyncThunk<void, { id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('loadOfferPage', async ({ id }, { dispatch, extra: api }) => {
  const { data: detailedOffer } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  const { data: nearOffers } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
  const { data: reviews } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
  dispatch(setOfferPage({ offer: detailedOffer, nearOffers, reviews }));
});

export const sendComment = createAsyncThunk<void,
  {
    postId: string;
    rewiew: CommentFormDataType;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('sendComment', async ({ postId, rewiew }, { dispatch, extra: api }) => {
  const { data: review } = await api.post<Review>(
    `${APIRoute.Comments}/${postId}`,
    {
      comment: rewiew.comment,
      rating: rewiew.rating,
    }
  );
  dispatch(addReview(review));
});

