import { Cities, NameSpace, SortTypes } from '../../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../../types/city';


type GlobalState = {
  selectedCity: City;
  selectedSortType: SortTypes;
};

const initialState: GlobalState = {
  selectedCity: Cities.Paris,
  selectedSortType: SortTypes.Popular,
};

export const globalState = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortTypes>) => {
      state.selectedSortType = action.payload;
    },
  },
});

export const { changeCity, changeSortingType } = globalState.actions;
