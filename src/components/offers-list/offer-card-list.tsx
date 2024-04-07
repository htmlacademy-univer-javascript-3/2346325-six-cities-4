import { Offers, Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferCardListProps = {
  offers: Offers;
};

export function OffersList({ offers }: OfferCardListProps) {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleMouseOver = (id: number) => {
    const activeOffer = offers.find((offer) => offer.id === id);
    if (activeOffer !== undefined && activeOffer !== selectedOffer) {
      setSelectedOffer(activeOffer);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            offer = {offer}
            key = {offer.id}
            onMouseOver={handleMouseOver}
          />
        ))
      }
    </div>
  );
}
