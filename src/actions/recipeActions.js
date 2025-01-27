import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_FAVORITE = 'SET_FAVORITE';

export const fetchRecipes = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    dispatch({
      type: FETCH_RECIPES,
      payload: response.data.meals || [],
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

// New toggleFavorite action
export const toggleFavorite = (recipe) => (dispatch, getState) => {
  const currentFavorites = getState().recipes.favorites;
  const isFavorite = currentFavorites.some(fav => fav.idMeal === recipe.idMeal);

  if (isFavorite) {
    const confirmRemove = window.confirm("This recipe is already in your favorites. Do you want to remove it?");
    if (confirmRemove) {
      // Remove from favorites
      dispatch({
        type: SET_FAVORITE,
        payload: currentFavorites.filter(fav => fav.idMeal !== recipe.idMeal),
      });
      alert("Recipe removed from favorites.");
    }
  } else {
    // Add to favorites
    dispatch({
      type: SET_FAVORITE,
      payload: [...currentFavorites, recipe],
    });
    alert("Recipe added to favorites.");
  }
};
