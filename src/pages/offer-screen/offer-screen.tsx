import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { ReviewForm } from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { AuthorizationStatus, CardType } from '../../const';
import { OffersList } from '../../components/offers-list/offer-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { loadOfferPage } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

export default function OfferScreen(): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const params = useParams();
  const dispatch = useAppDispatch();
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const selectedCity = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(loadOfferPage({ id: params.id ?? '' }));
  }, [params.id, dispatch]);

  const { offer, nearOffers, reviews } = useAppSelector(
    ({ offerPage }) => ({
      offer: offerPage.offer,
      nearOffers: offerPage.nearOffers,
      reviews: offerPage.reviews,
    })
  );

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthed = (authorizationStatus === AuthorizationStatus.Auth);

  const handleSelectedOfferOver = (id: number) => {
    const foundOffer = offers.find((o) => o.id === id);
    setSelectedOffer(foundOffer);
  };

  const handleSelectedOfferLeave = () => {
    setSelectedOffer(undefined);
  };

  return offer ? (
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
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li className="offer__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  <span className="offer__user-status">{offer.host.isPro}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList
                  reviews={reviews.slice().sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                  }).slice(0, 10)}
                />
                { isAuthed && <ReviewForm id={params.id!} />}
              </section>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="offer__map map">
            <Map
              offers={nearOffers}
              selectedOffer={selectedOffer}
              city={selectedCity}
            />
          </section>
          <OffersList
            offers={nearOffers}
            cardType={CardType.NearPlaces}
            onMouseOver={handleSelectedOfferOver}
            onMouseLeave={handleSelectedOfferLeave}
          />
        </div>
      </main>
    </div>
  ) : <LoadingScreen />;
}

