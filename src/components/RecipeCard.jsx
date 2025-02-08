import React from "react";
import { Link } from "react-router-dom";
import styles from "../asset/style/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <Link className={styles.recipeGrid} to={`/recipe/${recipe.id}`}>
      <img
        src={recipe.image || "https://fakeimg.pl/312x231?text=No+image&font=lobster"}
        alt={recipe.title}
        className={styles.recipeImage}
      />
      <div className={styles.recipeContent}> 
        <h3 className={styles.recipeTitle}>{recipe.title}</h3>
        <button className={styles.openRecipe}>See details <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </Link>
  );
};

export default RecipeCard;