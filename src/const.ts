import { City } from './types/city';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Root = '/',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 1,
  NoAuth = 0,
  Unknown = -1,
}

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel',
}

export enum CardType {
  NearPlaces = 'near-places',
  Cities = 'cities',
}

export enum SortTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite',
}

type Cities = {
  [key: string]: City;
};

export const Cities: Cities = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
};

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  FewOffersData = 'FEW_OFFERS_DATA',
  SingleOfferData = 'SINGLE_OFFER_DATA',
  favoritesData = 'favoriteS_DATA',
  NearbyOffersData = 'NEAR_OFFERS_DATA',
  ReviewsData = 'REVIEWS_DATA',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const StarRate = {
  terribly: 1,
  badly: 2,
  'not bad': 3,
  good: 4,
  perfect: 5,
};
