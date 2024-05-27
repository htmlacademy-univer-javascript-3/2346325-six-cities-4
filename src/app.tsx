import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import { AuthorizationStatus } from './const';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import LoginScreen from './pages/login-screen/login-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route/private-route';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import { offers } from './mocks/offers';
import LoadingScreen from './pages/loading-screen/loading-screen';
import { useAppSelector } from './hooks';
import HistoryRouter from './components/history-route/history-route';
import { history } from './history';


export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const areOffersLoading = useAppSelector((state) => state.offersLoadingState);
  if (areOffersLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (authorizationStatus === AuthorizationStatus.Unknown || areOffersLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/'>
            <Route index element={<MainScreen />} />
            <Route path='login' element={<LoginScreen />} />
            <Route path='offer/:id' element={<OfferScreen />} />
            <Route
              path='favorites'
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesScreen offers = {offers}/>
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}
