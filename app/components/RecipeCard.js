import React from 'react';

export default function RecipeCard({ recipe }) {
  return (
    <div style={styles.card}>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={styles.image}
      />
      <h2>{recipe.name}</h2>
      <div style={styles.details}>
        <p><strong>Macros:</strong></p>
        <p>Protein: {recipe.macros.protein}</p>
        <p>Fat: {recipe.macros.fat}</p>
        <p>Carbs: {recipe.macros.carbs}</p>
        <p>Calories: {recipe.macros.calories}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  details: {
    marginTop: '10px',
    textAlign: 'left',
  },
};