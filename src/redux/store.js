import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';

// Creiamo lo store globale
const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;