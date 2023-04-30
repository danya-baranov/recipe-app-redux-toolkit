import React from "react";
import { useActions } from "../../hooks/useActions";
import { useFavourites } from "../../hooks/useFavourites";
import { IRecipe } from "../../types/recipe.types";
import styles from "./RecipeItem.module.css";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
  const { favourites } = useFavourites();
  const { toggleFavorites } = useActions();
  const isExist = favourites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? "Remove To" : "Add To"} Favorites
      </button>
    </div>
  );
};

export default RecipeItem;
