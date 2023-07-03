import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Recipe({ recipe }) {
    return (
        <Link to={`/${recipe.id}`}>
            <Card src={`${recipe.image}`} alt={recipe.name} />
        </Link>
    )
}

export default Recipe;

export const Card = styled.img`
    float: left;
    width:  500px;
    height: 500px;
    object-fit: cover;
    border-style: groove;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;