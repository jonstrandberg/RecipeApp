import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
import '../App.css'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const apiKey = '521e83bc137f4f5fbb4908df47cce4fa';
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=20`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRecipes(data.results);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, []);

    return (
        <div className="flex-container">
            <h1>Recipes</h1>
            {recipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                <ul className="recipeItemContainer">
                    {recipes.map(recipe => (
                        <li key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <h4 className="foodTitle">{recipe.title}</h4>
                                <img src={recipe.image} alt={recipe.title} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;
