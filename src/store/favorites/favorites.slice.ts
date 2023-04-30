import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from './../../types/recipe.types';

const initialState:IRecipe[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }:PayloadAction<IRecipe>) => {
      console.log(recipe);
      const isExist = state.some((r) => r.id === recipe.id);
      console.log(isExist);
      if (isExist) {
        const index = state.findIndex((item) => item.id === recipe.id);

        if (index !== -1) state.splice(index, 1);
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
