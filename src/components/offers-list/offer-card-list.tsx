import { Offers, /*Offer */} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
//import { useState } from 'react';
//import { Location } from '../../types/city';
import { changeSelectedOffer, changeSelectedOfferNearby } from '../../store/action';
import { CardType } from '../../const';
import { useAppDispatch} from '../../hooks';

type OfferCardListProps = {
  offers: Offers;
  cardType: CardType;
};

export function OffersList({
  offers,
  cardType,
}: OfferCardListProps) {
  const dispatch = useAppDispatch();

  const handleMouseEnterFront = (id: number) => {
    const activeOffer = offers.find((offer) => offer.id === id);
    if (activeOffer !== undefined) {
      dispatch(changeSelectedOffer(activeOffer));
    }
  };

  const handleMouseEnterNearby = (id: number) => {
    const activeOffer = offers.find((offer) => offer.id === id);
    if (activeOffer !== undefined) {
      dispatch(changeSelectedOfferNearby(activeOffer));
    }
  };

  const handleMouseLeave = () => {
    dispatch(changeSelectedOffer(undefined));
  };

  return (
    cardType === CardType.Cities
      ?
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (<OfferCard key={offer.id} onMouseOver={handleMouseEnterFront} onMouseLeave={handleMouseLeave} offer={offer} cardType={CardType.Cities}/>))}
      </div>
      :
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (<OfferCard key={offer.id} onMouseOver={handleMouseEnterNearby} onMouseLeave={handleMouseLeave} offer={offer} cardType={CardType.NearPlaces}/>))}
        </div>
      </section>
  );
}
