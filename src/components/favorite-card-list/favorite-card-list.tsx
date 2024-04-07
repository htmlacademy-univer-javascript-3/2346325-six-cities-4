import { Offers } from '../../types/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type FavouritesCardListProps = {
  offers: Offers;
};

export function FavouriteCardList({ offers }: FavouritesCardListProps) {

  return (
    <div className="favorites__places">
      {
        offers.map((offer) => (
          <FavoriteCard
            offer = {offer}
            key = {offer.id}
          />
        ))
      }
    </div>
  );
}
