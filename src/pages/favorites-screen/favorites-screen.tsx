import { Offers } from '../../types/offers';
import { Cities } from '../../const';
import { Link } from 'react-router-dom';
import FavouritesList from '../../components/favourites-list/favourites-list';

type FavoritesScreenProps = {
  offers: Offers;
};

export default function FavoritesScreen({
  offers,
}: FavoritesScreenProps): JSX.Element {

  const favouritesByCities: JSX.Element[] = [];
  Cities.map((city) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
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
            <FavouritesList offers={filteredOffers}/>
          </div>
        </li>
      );
    }
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favouritesByCities}
            </ul>
          </section>
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
