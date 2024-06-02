import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { getOffers, getSelectedCity } from '../../store';
import CityOffers from '../../components/city-offers/city-offers';

function MainScreen(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === selectedCity.name
  );

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <CityOffers
          city={selectedCity}
          currentCityOffers={currentCityOffers}
        />
      </main>
    </div>
  );
}

export default MainScreen;
