import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import  styles from "./RecipePage.module.css";

const RecipePage = () => {
  const { id } = useParams(); // Estrai l'ID dalla URL

  return (
    <div className={styles.recipePage}>
        <RecipeDetail recipeId={id} />
    </div>
  );
};

export default RecipePage;
