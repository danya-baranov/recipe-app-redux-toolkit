import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipesApi";
import { IRecipeData } from "../../types/recipe.types";
import styles from "./CreateRecipe.module.css";

const defaultValue: IRecipeData = {
  name: "",
};

export default function CreateRecipe() {
  const [createRecipe] = useCreateRecipeMutation();
  const [recipe, setRecipe] = useState<IRecipeData>(defaultValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
    // console.log(recipe);
  };

  return (
    <div className={styles.item}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
