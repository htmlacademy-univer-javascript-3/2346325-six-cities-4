import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import HeaderLogo from '../header-logo/header-logo';
import { logout } from '../../store/api-actions';
import { Offer } from '../../types/offers';

function Header(): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const favoriteOffersCount = offers.filter((offer) => offer.isFavorite).length;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthed = (authorizationStatus === AuthorizationStatus.Auth);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            {isAuthed ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoriteOffersCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    onClick={() => {
                      dispatch(logout());
                    }}
                    to="/"
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
