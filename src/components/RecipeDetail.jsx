import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { getRecipeDetails } from "../services/api";
import styles from "./RecipeDetail.module.css";

const RecipeDetail = () => {
  const { id } = useParams(); // Prendiamo l'ID della ricetta dall'URL
  const navigate = useNavigate(); 

  const [recipe, setRecipe] = useState(null); // Stato per i dettagli della ricetta
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per gestire eventuali errori

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await getRecipeDetails(id); // Chiamata API per ottenere i dettagli
        setRecipe(data);
      } catch (err) {
        setError("⚠️ Error loading recipe details");
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) return <p className={styles.loading}>🔄️ Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.recipeDetailContainer}>
      <h1 className={styles.title}>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className={styles.recipeImage}/>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }} className={styles.description} />
      <button onClick={() => navigate(-1)} className={styles.backToRecipes}>
      <i className="fa-solid fa-arrow-left"></i>
      Back to recipes
      </button>
    </div>
  );
};

export default RecipeDetail;
