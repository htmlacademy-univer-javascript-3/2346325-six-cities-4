import { Offers } from '../../types/offers';
import { Cities } from '../../const';
import { Link } from 'react-router-dom';
import FavouritesList from '../../components/favourites-list/favourites-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

export default function FavoritesScreen(): JSX.Element {
  const offers: Offers = useAppSelector((state) => state.offers);
  const favouritesByCities: JSX.Element[] = [];
  Cities.map((city) => {
    const filteredOffers = offers.filter(
      (offer) => offer.city.name === city.name
    );
    if (filteredOffers.length !== 0) {
      favouritesByCities.push(
        <li key={city.name} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#todo">
                <span>{city.name}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavouritesList offers={filteredOffers} />
          </div>
        </li>
      );
    }
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favouritesByCities.length ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">{favouritesByCities}</ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}
