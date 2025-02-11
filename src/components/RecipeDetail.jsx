import { useParams, useNavigate } from "react-router-dom"; 
import { useRecipeDetails } from "../services/api"; // Custom Hook di React Query per ottenere i dettagli della ricetta
import { Helmet } from "react-helmet-async";
import styles from "../asset/style/RecipeDetail.module.css";

const RecipeDetail = () => {
  const { id } = useParams(); // Prendiamo l'ID della ricetta dall'URL
  const navigate = useNavigate(); // utile per il pulsante "Back to recipes"
  const { data: recipe, isLoading, isError, error } = useRecipeDetails(id); // Usiamo React Query per ottenere i dettagli della ricetta

  if (isLoading) return <p className={styles.loading}>🔄️ Loading...</p>;
  if (isError) return <p className={styles.error}>⚠️ {error.message}</p>;

  return (
    <>
      <Helmet>
        <title>{recipe ? `${recipe.title} - Veggy` : "Loading Recipe..."}</title>
      </Helmet>

      <div className={styles.recipeDetailContainer}>
        <h1 className={styles.title}>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} className={styles.description} />
        <button onClick={() => navigate(-1)} className={styles.backToRecipes}>
          <i className="fa-solid fa-arrow-left"></i>
          Back to recipes
        </button>
      </div>
    </>
  );
};

export default RecipeDetail;
