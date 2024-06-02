import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offers';
import { State } from '../../../types/state';

export const getNearbyOffers = (state: State): Offer[] =>
  state[NameSpace.NearbyOffersData].nearby;

export const getIsNearbyOffersLoading = (state: State): boolean =>
  state[NameSpace.NearbyOffersData].isNearbyOffersLoading;
