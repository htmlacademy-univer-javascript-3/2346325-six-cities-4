import { Offers, Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import { sortOffers } from '../../utils';
import { getSelectedSortType } from '../../store';

type OfferCardListProps = {
  offers: Offers;
  onMouseOver: (point: Offer) => void;
  onMouseLeave: () => void;
};

export function OffersList({
  offers,
  onMouseOver,
  onMouseLeave,
}: OfferCardListProps) {
  const selectedSortType = useAppSelector(getSelectedSortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      ))}
    </div>
  );
}
