import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // createAsyncThunk ci permette di gestire azioni asincrone
import { searchRecipes } from "../../services/api";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes", 
  async (query, thunkAPI) => { // thunkAPI ci serve per gestire eventuali errori
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
    status: 'idle', // idle | loading | succeeded | failed
    error: null, 
  },
  reducers: {}, // azioni sincrone
  extraReducers: (builder) => { // azioni asincrone (come fetchRecipes)
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
