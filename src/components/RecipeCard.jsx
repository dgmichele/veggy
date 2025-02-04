import React from "react";
import { Link } from "react-router-dom";
import styles from "../asset/style/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.recipeGrid}>
      <img
        src={recipe.image || "https://fakeimg.pl/312x231?text=No+image&font=lobster"}
        alt={recipe.title}
        className={styles.recipeImage}
      />
      <div className={styles.recipeContent}> 
        <h3 className={styles.recipeTitle}>{recipe.title}</h3>
        <Link className={styles.openRecipe} to={`/recipe/${recipe.id}`}>See details <i className="fa-solid fa-arrow-right"></i></Link>
      </div>

    </div>
  );
};

export default RecipeCard;