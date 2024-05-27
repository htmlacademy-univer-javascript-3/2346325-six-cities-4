import { OffersList } from '../../components/offers-list/offer-card-list';
import { Offer } from '../../types/offers';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { useState, useEffect } from 'react';
import { CardType } from '../../const';
import { SortedOffers } from '../../components/sorted-offers/sorted-offers';
import Header from '../../components/header/header';
import { clearOfferPage } from '../../store/action';

export default function MainScreen(): JSX.Element {
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

  const dispatch = useAppDispatch();
  dispatch(clearOfferPage());

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {currentCityOffers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {currentCityOffers.length} places to stay in {selectedCity.name}
                </b>
                <SortedOffers />
                <OffersList
                  offers={currentCityOffers}
                  cardType={CardType.Cities}
                  onMouseOver={handleSelectedOfferOver}
                  onMouseLeave={handleSelectedOfferLeave}
                />
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
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in{' '}
                    {selectedCity.name}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
