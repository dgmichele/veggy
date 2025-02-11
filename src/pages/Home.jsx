import { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Hook per gestire parametri URL e gestire la visibilità degli elementi caricati
import { Helmet } from "react-helmet-async";
import { useSearchRecipes } from "../services/api"; // Importiamo il custom hook di React Query
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import styles from "../asset/style/Home.module.css";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Gestiamo i parametri URL
  const searchQuery = searchParams.get("query") || ""; // estraiamo la query dall'URL (usa "" se non la query non è presente)
  const initialVisible = parseInt(searchParams.get("visible") || "6", 10); // Recuperiamo visibleRecipes dall'URL
  const [visibleRecipes, setVisibleRecipes] = useState(initialVisible); // Usiamo il valore recuperato
  const { data: recipes = [], isLoading, isError, error } = useSearchRecipes(searchQuery); // Gestione chiamata API con React Query

  const handleSearch = (query) => {
    setSearchParams({ query, visible: 6 }); // Reset della visibilità a 6
    setVisibleRecipes(6);
  };

  // button load more
  const loadMoreRecipes = () => {
    const newVisible = visibleRecipes + 6;
    setSearchParams({ query: searchQuery, visible: newVisible });
    setVisibleRecipes(newVisible);
  };

  return (
    <>
      <Helmet>
        <title>
          {searchQuery
            ? `Results for "${searchQuery}" - Veggy`
            : "Veggy"}
        </title>
      </Helmet>

      <div className={styles.titleContainer}>
        <div className={styles.titleInner}>
          <h1 className={styles.title}>Find your favourite vegetarian recipe</h1>
        </div>
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <div className={styles.resultsContainer}>
        {!isLoading && !isError && (
          <h2 className={styles.resultsTitle}>
            {searchQuery ? `Results for "${searchQuery}"` : "Our best recipes:"}
          </h2>
        )}
      </div>

      <div className={styles.statusContainer}>
        {isLoading && <p className={styles.loading}>🔄️ Loading recipes</p>}
        {isError && <p className={styles.error}>⚠️ Error: {error.message}</p>}
      </div>

      <section className={styles.homeContainer}>
        <div className={styles.homeInner}>
          {recipes.length > 0 ? (
            recipes
              .slice(0, visibleRecipes)
              .map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
          ) : (
            !isLoading && <p className={styles.noResults}>🥲 No recipes found!</p>
          )}
        </div>
      </section>

      {searchQuery && visibleRecipes < recipes.length && (
        <div className={styles.loadMoreContainer}> 
          <button className={styles.loadMoreButton} onClick={loadMoreRecipes}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
