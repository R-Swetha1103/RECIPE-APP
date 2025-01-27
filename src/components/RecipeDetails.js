// src/components/RecipeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.find((r) => r.idMeal === id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the recipes if they are not already in state
    if (!recipe) {
      dispatch(fetchRecipes(''));
    } else {
      // Set a timer for 2 seconds to simulate GIF loading
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [dispatch, recipe]);

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#00203F' }}>
        <img src="https://media.tenor.com/7qFULBHgzlYAAAAj/bubu-cooking-dudu-bubu.gif" alt="Loading" />
        <p style={{ marginTop: '20px', fontSize: '1.5rem', color: '#FFFFFF' }}>Loading...</p> {/* Loading Text */}
      </div>
    );
  }

  if (!recipe) {
    return <div>Loading...</div>; // Fallback in case recipe is not found
  }

  return (
    <div style={{ padding: '20px', maxWidth: '90%', margin: 'auto', backgroundColor: '#00203F', minHeight: '100vh' }}>
      {/* Navigation Icons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#FFFFFF' }}>
        <Link to="/recipes" style={{ textDecoration: 'none' }}>
          <i className="fas fa-arrow-left" style={{ fontSize: '24px', color: '#FFFFFF' }}></i> {/* Back Icon */}
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-home" style={{ fontSize: '24px', color: '#FFFFFF' }}></i> {/* Home Icon */}
        </Link>
      </div>
      
      <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
  
      <h3 style={{ color: '#FFFFFF' }}>Ingredients</h3>
      <ul style={{ color: '#FFFFFF' }}>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          if (ingredient) {
            return <li key={index}>{ingredient}</li>;
          }
          return null;
        })}
      </ul>
      
      <h3 style={{ color: '#FFFFFF' }}>Instructions</h3>
      <p style={{ color: '#FFFFFF' }}>{recipe.strInstructions}</p>
      
      <h3 style={{ color: '#FFFFFF' }}>Preparation Time</h3>
      <p style={{ color: '#FFFFFF' }}>{recipe.strPrepTime || 'Not specified'}</p>
      
      <h3 style={{ color: '#FFFFFF' }}>Serving Size</h3>
      <p style={{ color: '#FFFFFF' }}>{recipe.strServings || 'Not specified'}</p>
    </div>
  );
  
};

export default RecipeDetails;
