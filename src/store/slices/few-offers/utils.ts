import { Offer } from '../../../types/offers';


export const updateOffers = (offers: Offer[], updatedOffer: Offer) => {
  const offerIndex = offers.findIndex((element) => element.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};
