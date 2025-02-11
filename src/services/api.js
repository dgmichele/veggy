import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Variabili d'ambiente
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Creiamo un'istanza di Axios
const api = axios.create({
  baseURL: API_URL,
  params: {
    apiKey: API_KEY,
    diet: 'vegetarian',
    number: 24, // massimo numero di ricette da visualizzare
  },
});

// Funzione per cercare le ricette (query function)
const fetchRecipes = async (query) => {
  const response = await api.get('/complexSearch', {
    params: { query },
  });
  return response.data.results;
};

// Funzione per ottenere i dettagli di una ricetta (query function)
const fetchRecipeDetails = async (recipeId) => {
  const response = await api.get(`/${recipeId}/information`);
  return response.data;
};

// Custom Hook per cercare ricette
export const useSearchRecipes = (query) => {
  return useQuery({
    queryKey: ['recipes', query || 'default'], // Cambia la chiave se la query è vuota
    queryFn: () => fetchRecipes(query), // Funzione che esegue la chiamata API
    enabled: true, // La query viene sempre eseguita, anche se query è vuoto
  });
};

// Custom Hook per ottenere i dettagli di una ricetta
export const useRecipeDetails = (recipeId) => {
  return useQuery({
    queryKey: ['recipe', recipeId], // Chiave univoca per la cache
    queryFn: () => fetchRecipeDetails(recipeId), // Funzione API
    enabled: !!recipeId, // La query parte solo se "recipeId" è valido
  });
};