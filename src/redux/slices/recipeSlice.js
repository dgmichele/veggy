import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchRecipes } from "../../services/api";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async (query, thunkAPI) => {
    try {
      const response = await searchRecipes(query);
      return { query, recipes: response }; // Ritorniamo anche la query
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [], 
    status: 'idle',
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Se la query è vuota, resetta e mostra le ricette generiche
        if (action.payload.query === "") {
          state.recipes = action.payload.recipes;
        } else {
          // Se c'è una ricerca, sovrascrivi le ricette con i risultati
          state.recipes = action.payload.recipes;
        }
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.payload;
      });
  }
});

export default recipeSlice.reducer;
