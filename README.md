# Veggy 🌿

A web app for vegetarians that allows users to search for vegetarian recipes using the Spoonacular API. The app displays a list of recipes in card format, allows users to view details of a specific recipe, and upload additional results with a “Load more” button.

## Features:

- **Recipe search**: Users can search for vegetarian recipes using a search bar.
- **Recipe tab display**: Each recipe is presented with an image and title.
- **Recipe details**: By clicking on a recipe, the user can view detailed information.
- **Dynamic loading**: A “Load more” button allows users to load additional recipes (available only during a search).
- **Intuitive navigation**: Navigation between pages occurs without a full refresh thanks to React Router, instead if you click the logo in the header to return to the home page, you have a refresh of the homepage.
- **State management**: Using Redux Toolkit to manage the global state of the app.
- **Secure API configuration**: Environment variables (such as API URL and API key) are managed via dotenv.
- **Style**: CSS Modules are used for better management of styles and especially to avoid internal conflicts in the app.

## Technologies Used:

- **React**: Library for creating the user interface.
- **React Router**: For navigation between pages.
- **Redux Toolkit**: For global state management.
- **Axios**: For API calls.
- **Vite**: For bundling and application development.
- **Dotenv**: For managing environment variables (API key and API URL).

## Project Structure:

- **`main.jsx`**.
  React app entry point. You configure ReactDOM and connect the main component (`App.jsx`).
- **`App.jsx`**
  General configuration of the app. Here you add React Router and define the main routes, such as the Home and the recipe details page.

### Services (API).

- **`services/api.js`**
  Here are the functions for communicating with the Spoonacular API using Axios. You centralize API calls to search for recipes and to get the details of a recipe (using environment variables and React Query with its custom hooks).

### Components.

- **`components/Header.jsx`**
  Component that manages the header of the site.
- **`components/Footer.jsx`**
  Component that manages the site footer.
- **`components/SearchBar.jsx`**
  Component for the search bar. This will be the first point of interaction for the user to search for recipes.
- **`components/RecipeCard.jsx`**
  Component to display a recipe card with image and title. It will be used to display search results.
- **`components/RecipeDetail.jsx`**
  Component to display the details of a recipe. This will be used on the page dedicated to the individual recipe.

### Pages

- **`pages/Home.jsx`**
  Home page configuration with search bar and list of results (using `RecipeCard`).
- **`pages/RecipePage.jsx`**
  Configuration of the page showing the details of a recipe, using the `RecipeDetail` component.

## Installation and Configuration:

1. **Clone the repository:**
   `git clone URL-of-repository cd name-of-repository`.

2. **Clone the repository:**
   `npm install`

3. **Configure environment variables:**
   Create an `.env` file in the root of the project and add:

   - `VITE_API_KEY=your_api_key`.
   - `VITE_API_URL=https://api.spoonacular.com/recipes/`

4. **Start the development server:**
   `npm run dev`

## Usage:

- **Search**: Use the search bar to find vegetarian recipes. When a search is active, the section title becomes “Results:”; otherwise it remains “Our best recipes:”
- **Recipe Details**: Click on a recipe card to view details.
- **Load More**: During a search, the “Load more” button allows you to view additional results.

## Test:

To test the app, go here ➡️ https://your-veggy.netlify.app/

Translated with DeepL.com (free version)
