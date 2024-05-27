import { Offers /*Offer */ } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
//import { useState } from 'react';
//import { Location } from '../../types/city';
import { CardType } from '../../const';
import { useAppSelector } from '../../hooks';
import { sortOffers } from '../../utils';

type OfferCardListProps = {
  offers: Offers;
  cardType: CardType;
  onMouseOver: (id: number) => void;
  onMouseLeave: () => void;
};

export function OffersList({
  offers,
  cardType,
  onMouseOver,
  onMouseLeave,
}: OfferCardListProps) {
  const selectedSortType = useAppSelector((state) => state.selectedSortType);

  return cardType === CardType.Cities ? (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          cardType={CardType.Cities}
        />
      ))}
    </div>
  ) : (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            offer={offer}
            cardType={CardType.NearPlaces}
          />
        ))}
      </div>
    </section>
  );
}
