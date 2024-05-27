import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from './const';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import LoginScreen from './pages/login-screen/login-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route/private-route';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
//import { Offers } from './types/offers';
import { offers } from './mocks/offers';
import LoadingScreen from './pages/loading-screen/loading-screen';
import { useAppSelector } from './hooks';

export default function App(): JSX.Element {
  const areOffersLoading = useAppSelector((state) => state.offersLoadingState);
  if (areOffersLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
