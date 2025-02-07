import axios from 'axios';

// Variabili d'ambiente
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY; 

const api = axios.create({
  baseURL: API_URL, 
  params: {
    apiKey: API_KEY,
    diet: 'vegetarian',
    number: 24, // massimo numero di ricette da visualizzare
  },
});

export const searchRecipes = async (query) => {
  try {
    const response = await api.get('/complexSearch', {
      params: { query }, // axios aggiunge il parametro "query" all'URL
    });
    return response.data.results; // "results" perché isoliamo solo i dati delle ricette, il resto dell'oggetto non serve
  } catch (error) {
    console.error('Error in recipe retrieval:', error);
    throw error;
  }
};

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await api.get(`/${recipeId}/information`);
    return response.data; // l'oggetto restituito contiene di suo i dettagli della ricetta che ci servono
  } catch (error) {
    console.error('Error in retrieving recipe details:', error);
    throw error;
  }
};
