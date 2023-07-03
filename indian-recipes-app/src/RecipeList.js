import { useEffect, useState } from 'react'
import Recipe from './Recipe';
import globalRecipes from './globalRecipes';

function RecipeList() {

    const [ thisRecipe, setRecipe ] = useState([]);

    useEffect(() => {
        getAllRecipes();
    }, []); 

    const getAllRecipes = async () => {
        const db_fetch = await fetch(`http://localhost:3002/recipes`);
        const recipes = await db_fetch.json();
        setRecipe(recipes);
    }

    globalRecipes.allRecipes = thisRecipe;
    console.log(globalRecipes.allRecipes);

  return (
    <div>
        {thisRecipe.map(my_recip => {
            return (
                <Recipe key={my_recip.id} recipe={my_recip} />
            );
        })}
    </div>
  );

}

export default RecipeList