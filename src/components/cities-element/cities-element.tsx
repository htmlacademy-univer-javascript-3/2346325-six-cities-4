import { useAppSelector } from '../../hooks';
import { getSelectedCity } from '../../store';
import { City } from '../../types/city';
import { Link } from 'react-router-dom';

type CitiesElementProps = {
  city: City;
  onCityChange: (city: City) => void;
};

function CitiesElement ({city, onCityChange}: CitiesElementProps): JSX.Element {
  return (
    <li className="locations__item" onClick={(evt) => {
      evt.preventDefault();
      onCityChange(city);
    }}
    >
      <Link className={
        `locations__item-link
        tabs__item
        ${useAppSelector(getSelectedCity) === city ? 'tabs__item--active' : ''}`
      } to="#"
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

export default CitiesElement;
