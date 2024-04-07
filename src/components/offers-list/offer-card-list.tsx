import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferCardListProps = {
  offers: Offers;
};

export function OffersList({ offers }: OfferCardListProps) {
  const [selectedOffer, setSelectedOffer] = useState(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            offer = {offer}
            key = {offer.id}
            setSelectedOffer = {setSelectedOffer}
          />
        ))
      }
    </div>
  );
}
