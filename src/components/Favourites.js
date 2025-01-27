// src/components/Favourites.js

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const { favorites } = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#00203F' }}>
        <img src="https://media.tenor.com/7qFULBHgzlYAAAAj/bubu-cooking-dudu-bubu.gif" alt="Loading" style={{ width: '150px', marginBottom: '20px' }} />
        <p style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00203F', minHeight: '100vh' }}>
      {/* Navigation Icons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%', maxWidth: '400px' }}>
        <Link to="/recipes" style={{ textDecoration: 'none' }}>
          <i className="fas fa-arrow-left" style={{ fontSize: '24px', color: '#FFFFFF' }}></i> {/* Back Icon */}
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-home" style={{ fontSize: '24px', color: '#FFFFFF' }}></i> {/* Home Icon */}
        </Link>
      </div>
      
      <h1 style={{ fontSize: '36px', color: '#FFFFFF' }}>Favorites</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div key={recipe.idMeal} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', width: '200px', textAlign: 'center', backgroundColor: 'white' }}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '10px', color: '#4B3D3D' }}>{recipe.strMeal}</h3>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '5px' }}>
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No favorites added.</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
