import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AppRoute } from '../const';

export const REDIRECT_TO_ROUTE_TYPE = `${NameSpace.App}/redirectToRoute`;

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE_TYPE);
