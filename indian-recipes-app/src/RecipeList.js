import { useEffect, useState } from 'react'
import Recipe from './Recipe';

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