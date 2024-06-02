import { useAppSelector } from '../../hooks';
import { City } from '../../types/city';
import { getSelectedCity } from '../../store';

type CitiesElementProps = {
  city: City;
  onCityChange: (city: City) => void;
};

export function CitiesElement({ city, onCityChange }: CitiesElementProps) {
  return (
    <li
      className="locations__item"
      onClick={(evt) => {
        evt.preventDefault();
        onCityChange(city);
      }}
    >
      <a
        className={`locations__item-link
        tabs__item
        ${
    useAppSelector(getSelectedCity) === city
      ? 'tabs__item--active'
      : ''
    }`}
        href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
