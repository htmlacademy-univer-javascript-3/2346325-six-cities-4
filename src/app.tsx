import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from './const';
import FavoritesScreen from './pages/favourites-screen/favourites-screen';
import LoginScreen from './pages/login-screen/login-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route/private-route';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';


type AppScreenProps = {
  offerCardNumber: number;
};

export default function App({ offerCardNumber }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen offerCardNumber={offerCardNumber} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen />}
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferScreen />}
      />
      <Route
            path={AppRoute.Favourites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
        />
        <Route
            path="*"
            element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  )


}
