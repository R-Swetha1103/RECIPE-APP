// src/reducers/recipeReducer.js
import { FETCH_RECIPES, SET_FAVORITE } from '../actions/recipeActions';

// src/reducers/recipeReducer.js

const initialState = {
  recipes: [],
  favorites: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case SET_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;

