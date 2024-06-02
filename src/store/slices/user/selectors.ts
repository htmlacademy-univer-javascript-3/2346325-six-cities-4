import { AuthorizationStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { User } from '../../../types/user';

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserInfo = (state: State): User | null =>
  state[NameSpace.User].userInfo;

export const getIsSubmittingLogin = (state: State): boolean =>
  state[NameSpace.User].isSubmittingLogin;
