import { NameSpace, SortTypes } from '../../../const';
import { City } from '../../../types/city';
import { State } from '../../../types/state';

export const getSelectedSortType = (state: State): SortTypes =>
  state[NameSpace.App].selectedSortType;

export const getSelectedCity = (state: State): City =>
  state[NameSpace.App].selectedCity;
