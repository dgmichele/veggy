import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // Hook per gestire parametri URL e gestire la visibilità degli elementi caricati
import { fetchRecipes } from "../redux/slices/recipeSlice";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipe);
  
  const [searchParams, setSearchParams] = useSearchParams(); // Gestiamo i parametri URL
  const searchQuery = searchParams.get("query") || ""; 
  const initialVisible = parseInt(searchParams.get("visible") || "6", 10); // Recuperiamo visibleRecipes dall'URL
  
  const [visibleRecipes, setVisibleRecipes] = useState(initialVisible); // Usiamo il valore recuperato

  useEffect(() => {
    if (status === "idle" || searchQuery) {
      dispatch(fetchRecipes(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (query) => {
    setSearchParams({ query, visible: 6 }); // Reset visibilità a 6 all'inizio di una nuova ricerca
    dispatch(fetchRecipes(query));
    setVisibleRecipes(6);
  };

  const loadMoreRecipes = () => {
    const newVisible = visibleRecipes + 6;
    setSearchParams({ query: searchQuery, visible: newVisible }); // Aggiorniamo l'URL con il nuovo valore
    setVisibleRecipes(newVisible);
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.titleInner}>
          <h1 className={styles.title}>Find your favourite vegetarian recipe</h1>
        </div>
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <div className={styles.resultsContainer}>
        {/* Mostra il titolo solo se non siamo in fase di caricamento o errore */}
        {status !== "loading" && status !== "failed" && (
          <h2 className={styles.resultsTitle}>
            {/* Mostra i "Results" solo nei risultati di ricerca */}
            {searchQuery ? "Results:" : "Our best recipes:"}
          </h2>
        )}
      </div>

      <div className={styles.statusContainer}>
        {status === "loading" && <p className={styles.loading}>🔄️ Loading recipes</p>}
        {status === "failed" && <p className={styles.error}>⚠️ Error: {error}</p>}
      </div>

      <section className={styles.homeContainer}>
        <div className={styles.homeInner}>
          {recipes.length > 0 ? (
            recipes.slice(0, visibleRecipes)
              .map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
          ) : (
            status === "succeeded" && <p className={styles.noResults}>🥲 No recipes found!</p>
          )}
        </div>
      </section>

      {/* Mostra il pulsante solo nei risultati di ricerca e se ci sono ricette da caricare */}
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
