// CustomSuit.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Shoo from '../../Pages/ShooesPages/Shoo';
import dShooes from '../Assets/3dShooes.jpeg';
import dShirt from '../Assets/3dTshirtHero.jpeg';

const Card = ({ image, cardId }) => (
  <Link to={`/custom/card${cardId}`} style={{ textDecoration: 'none' }}>
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        cursor: 'pointer',
        display: 'flex',
        height: '70vh',
        widows: '70vw',
        backgroundColor: 'blue',
      }}
    >
      <img src={image} alt="Card" style={{ maxWidth: '100%' }} />
      <div>{cardId}</div>
    </div>
  </Link>
);

const CustomSuit = () => {
  return (
    <div>
      <h1>Welcome to My Custom Suit Website</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card image={dShooes} cardId={1} />
        <Card image={dShirt} cardId={2} />
      </div>
    </div>
  );
};

export default CustomSuit;
