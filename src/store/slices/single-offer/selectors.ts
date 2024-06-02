import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offers';
import { State } from '../../../types/state';

export const getOffer = (state: State): Offer | null =>
  state[NameSpace.SingleOfferData].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.SingleOfferData].isOfferLoading;
