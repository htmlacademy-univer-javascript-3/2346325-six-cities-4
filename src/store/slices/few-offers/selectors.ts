import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offers';
import { State } from '../../../types/state';

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.FewOffersData].offers;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.FewOffersData].isOffersLoading;
