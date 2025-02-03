import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY; 

const api = axios.create({
  baseURL: API_URL, 
  params: {
    apiKey: API_KEY,
    diet: 'vegetarian',
    number: 24,
  },
});

export const searchRecipes = async (query) => {
  try {
    const response = await api.get('/complexSearch', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error in recipe retrieval:', error);
    throw error;
  }
};

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await api.get(`/${recipeId}/information`);
    return response.data;
  } catch (error) {
    console.error('Error in retrieving recipe details:', error);
    throw error;
  }
};
