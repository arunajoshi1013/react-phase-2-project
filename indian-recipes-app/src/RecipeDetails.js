import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


function RecipeDetails() {
    let { id } = useParams();
    const [ recDetails, setRecDetails ] = useState([]);

    useEffect(() => {
        getRecipe(id);
    }, [id]);

    const getRecipe = async () => {
        const recipeFetch = await fetch(`http://localhost:3002/recipes/${id}`);
        const recipe = await recipeFetch.json();
        setRecDetails(recipe);
    }

  return (
    <RecipeStyle>
        <h1> RecipeDetails go here </h1>
    </RecipeStyle>
  )
}

export default RecipeDetails;

const RecipeStyle = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    @media (max-width: 768px) {
        display:block;
        
    }
    >div{
        margin-left: 20px;
        
    }
    img{
        position:relative;
        top: -5rem;
        height:100%;
        
    }
`;