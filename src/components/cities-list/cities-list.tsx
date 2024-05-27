import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import { CitiesElement } from '../cities-element/cities-element';

export function CitiesList() {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={handleCityChange}
        />
      ))}
    </ul>
  );
}
