
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, toggleFavorite } from '../actions/recipeActions';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, favorites } = useSelector((state) => state.recipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchRecipes(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterRecipes = (recipes) => {
    if (!filter) return recipes;
    return recipes.filter((recipe) => recipe.strCategory.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <div style={{
      padding: '20px',
      background: 'url("https://t4.ftcdn.net/jpg/02/92/15/69/360_F_292156960_5C0FwgplLzkx76T5IZ0ryWNwKSzEUHtP.jpg")',
      backgroundSize: '400px',  // Set smaller size for repeat
      backgroundRepeat: 'repeat',  // Ensure the background repeats
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://media.tenor.com/7qFULBHgzlYAAAAj/bubu-cooking-dudu-bubu.gif" 
               alt="Cooking GIF" style={{ width: '36px', height: '36px', marginRight: '10px' }} />
          <h1 style={{ fontFamily: 'Lobster, cursive', fontSize: '36px', color: '#FFB300' }}>Delicious Recipe</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: '#FFB300' }}>
            <i className="fas fa-home" style={{ fontSize: '24px' }}></i>
          </Link>
          <Link to="/favorites" style={{ textDecoration: 'none', color: '#FFB300' }}>
            <i className="fa fa-heart-o" style={{ fontSize: '24px' }}></i>
          </Link>
        </div>
      </div>
  
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for recipes"
          style={{ padding: '10px', marginRight: '10px', width: '200px' }}
        />
        <select value={filter} onChange={handleFilterChange} style={{ padding: '10px', width: '200px' }}>
          <option value="">All Categories</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Gluten-Free">Gluten-Free</option>
        </select>
      </div>
  
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filterRecipes(recipes).map((recipe) => (
          <div key={recipe.idMeal} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', width: '200px', textAlign: 'center', backgroundColor: '#00203F' }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', color: '#FFD700' }}>{recipe.strMeal}</h3>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <button style={{ padding: '10px 20px', backgroundColor: '#B86A3A', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                View Details
              </button>
            </Link>
            <button
              onClick={() => dispatch(toggleFavorite(recipe))}
              style={{
                padding: '10px 20px',
                backgroundColor: '#A4D65E',
                border: 'none',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '5px',
              }}
            >
              {favorites.some(fav => fav.idMeal === recipe.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default RecipeList;
