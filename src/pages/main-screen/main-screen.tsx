import HeaderLogo from '../../components/header-logo/header-logo';
import { OffersList } from '../../components/offers-list/offer-card-list';
import { Offer } from '../../types/offers';
/*import { Offers } from '../../types/offers';*/
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { useState, useEffect } from 'react';
//import { Location } from '../../types/city';
import { CardType } from '../../const';
import { Link } from 'react-router-dom';
import { SortedOffers } from '../../components/sorted-offers/sorted-offers';

export default function MainScreen(): JSX.Element {
  /*const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(SS
    undefined
  );*/

  const offers: Offer[] = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.city);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);

  const handleSelectedOfferOver = (id: number) => {
    setSelectedOffer(offers.find((offer) => offer.id === id));
  };

  const handleSelectedOfferLeave = () => {
    setSelectedOffer(undefined);
  };

  useEffect(() => {
    const filteredOffers = offers.filter(
      (offer) => offer.city.name === selectedCity.name
    );
    setCurrentCityOffers(filteredOffers);
  }, [selectedCity, offers]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favourites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">
                      {offers.length}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#todo">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentCityOffers.length} places to stay in {selectedCity.name}
              </b>
              <div className="cities__places-list places__list tabs__content">
                <SortedOffers />
                <OffersList
                  offers={currentCityOffers}
                  cardType={CardType.Cities}
                  onMouseOver={handleSelectedOfferOver}
                  onMouseLeave={handleSelectedOfferLeave}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={currentCityOffers}
                  city={selectedCity}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
