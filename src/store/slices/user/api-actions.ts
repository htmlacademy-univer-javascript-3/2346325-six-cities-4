import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../../../const';
import { dropToken, saveToken } from '../../../api/token';
import { fetchOffersAction } from '../few-offers';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { AuthData, User } from '../../../types/user';

export const checkAuthAction = createAsyncThunk<
  User,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  });

export const loginAction = createAsyncThunk<
  User,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.User}/login`,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, {
      email,
      password,
    });
    dispatch(fetchOffersAction());
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  `${NameSpace.User}/logout`,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dispatch(fetchOffersAction());
    dropToken();
  }
);
