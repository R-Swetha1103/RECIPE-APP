
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import Favourites from './components/Favourites';
import RecipeDetails from './components/RecipeDetails';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> 
      </Routes>
    </div>
  );
};

export default App;