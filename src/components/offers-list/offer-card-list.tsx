import { Offers, Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import { Location } from '../../types/city';
import { CardType } from '../../const';

type OfferCardListProps = {
  offers: Offers;
  setSelectedPoint?: React.Dispatch<React.SetStateAction<Location | undefined>>;
  cardType: CardType;
};

export function OffersList({
  offers,
  setSelectedPoint,
  cardType,
}: OfferCardListProps) {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleMouseOver = (id: number) => {
    const activeOffer = offers.find((offer) => offer.id === id);
    if (
      activeOffer !== undefined &&
      activeOffer !== selectedOffer &&
      setSelectedPoint
    ) {
      setSelectedOffer(activeOffer);
      setSelectedPoint(activeOffer.location);
    }
  };

  return offers.map((offer) => (
    <OfferCard
      offer={offer}
      key={offer.id}
      onMouseOver={handleMouseOver}
      cardType={cardType}
    />
  ));
}
