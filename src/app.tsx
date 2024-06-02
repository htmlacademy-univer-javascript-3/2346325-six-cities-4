import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import LoginScreen from './pages/login-screen/login-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route/private-route';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import LoadingScreen from './pages/loading-screen/loading-screen';
import { useAppSelector, useAppDispatch } from './hooks';
import HistoryRouter from './history-route/history-route';
import { history } from './history';
import { useEffect } from 'react';
import { AppRoute } from './const';
import { fetchfavoritesAction, getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from './store';


export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const areOffersLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchfavoritesAction());
    }
  }, [dispatch, isAuthChecked]);


  if (areOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (areOffersLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={history}>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<MainScreen />} />
            <Route path={AppRoute.Login} element={<LoginScreen />} />
            <Route path={AppRoute.Offer} element={<OfferScreen />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesScreen />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}
