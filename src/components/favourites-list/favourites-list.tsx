import { Offer } from '../../types/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type FavouritesListProps = {
  offers: Offer[];
};

function FavouritesList({ offers }: FavouritesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default FavouritesList;
