import { useState } from "react";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import { useGetRecipesQuery } from "./store/api/api";
// import User from "./components/user/User";

const userId = 1;

function App() {
  // const { isLoading, error, data } = useGetRecipesQuery(undefined, {
  //   skip: !userId,
  // });
  const [searchItem, setSearchItem] = useState("");
  const [queryTemp, setQueryTemp] = useState("");
  const { isLoading, error, data } = useGetRecipesQuery(queryTemp);

  const handleSearch = () => {
    setQueryTemp(searchItem);
  };
  return (
    <>
      <section>
        <Header />
        {/* <User /> */}
        <CreateRecipe />

        <div>
          <input
            type="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.currentTarget.value)}
            placeholder="Enter search item"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : data?.length ? (
            data?.map((recipe) => {
              return <RecipeItem key={recipe.id} recipe={recipe} />;
            })
          ) : (
            <h1>Recipes not found</h1>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
