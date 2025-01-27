// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onShowSearch, showSearch }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/recipes');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url("https://media2.giphy.com/media/WAPh6PcgMyzw4NcxSv/200.webp?cid=790b7611lktvauf5hxf46h63e7yqk0atir2bvob2ygk1v3ul&ep=v1_gifs_search&rid=200.webp&ct=g")`,
        backgroundSize: '150%',
        backgroundPosition: 'center',
      }}
    >
      <img
        src="https://media.tenor.com/7qFULBHgzlYAAAAj/bubu-cooking-dudu-bubu.gif"
        alt="Bubu cooking"
        style={{
          maxWidth: '200px',
          marginBottom: '20px',
          zIndex: 2,
        }}
      />
      <h1 style={{ fontFamily: 'Lobster, cursive', fontSize: '48px', marginBottom: '10px', color: '#4B3D3D' }}>Delicious Recipe</h1> {/* Dark color */}
      <p style={{ fontSize: '18px', marginBottom: '20px', color: '#4B3D3D' }}>
        Let's make cooking easier with the recipe
      </p>
      <button
        onClick={handleSearchClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          zIndex: 2,
          backgroundColor: '#D9534F', // Change this to your preferred color
          border: '1px solid #C0392B', // Darker version for border
          color: '#FFFFFF', // Text color, white for better contrast
        }}
      >
        Let's search for the recipe
      </button>
    </div>
  );
};

export default Home;
