import { useParams } from 'react-router-dom';
import { ReviewForm } from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import  Map  from '../../components/map/map';
import NearOffersList from '../../components/near-offers-list/near-offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect} from 'react';
import Header from '../../components/header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction, getAuthCheckedStatus, getIsNearbyOffersLoading, getIsOfferLoading, getIsReviewsLoading, getNearbyOffers, getOffer, getReviews } from '../../store';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(getReviews);
  const offer = useAppSelector(getOffer);
  const nearbyList = useAppSelector(getNearbyOffers);
  const isAuthed = useAppSelector(getAuthCheckedStatus);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isNearbyOffersLoading = useAppSelector(getIsNearbyOffersLoading);

  const isAnyLoading = isOfferLoading || isNearbyOffersLoading || isReviewsLoading;

  const nearbyOffers = nearbyList.slice(0, 3);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyAction(id));
    }
  }, [dispatch, id]);
  if (isAnyLoading){
    return <LoadingScreen />;
  }
  if (!offer) {
    return <NotFoundScreen />;
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <FavoriteButton
                  isFavorite={offer.isFavorite}
                  id={offer.id}
                  width="31"
                  height="33"
                  buttonClass="offer__bookmark-button"
                  activeClass="offer__bookmark-button--active"
                  iconClass="offer__bookmark-icon"
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${offer.rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms === 1 || 's'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adult{offer.maxAdults === 1 || 's'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map(
                    (good) => (<li key={good} className="offer__inside-item">{good}</li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList
                  reviews={reviews.slice().sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                  }).slice(0, 10)}
                />
                { isAuthed && <ReviewForm id={id!} />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={nearbyOffers[0].city}
              points={nearbyOffers}
              selectedPoint={offer}
            />
          </section>
        </section>
        <div className="container">
          <NearOffersList offers={nearbyOffers.slice(0, 3)} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

