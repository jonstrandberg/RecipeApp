import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeItem = () => {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const apiKey = '521e83bc137f4f5fbb4908df47cce4fa';
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRecipeDetails(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [id]);

    if (!recipeDetails) {
        return <p>Loading recipe details...</p>;
    }

    const { title, image, readyInMinutes, servings, instructions } = recipeDetails;

    return (
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>Cooking Time: {readyInMinutes} minutes</p>
        <p>Servings: {servings}</p>
        <h3>Instructions:</h3>
        <div dangerouslySetInnerHTML={{ __html: instructions }}></div>
      </div>
    );
  };

export default RecipeItem;



