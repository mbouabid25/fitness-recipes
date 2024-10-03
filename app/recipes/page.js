"use client"

import React from 'react';
import RecipeCarousel from '../components/RecipeCarousel';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'; // To handle navigation

const recipes = [
  {
    id: 1,
    name: 'Chicken Salad',
    image: 'images/placeholder-image.jpg',
    macros: { protein: '30g', fat: '10g', carbs: '15g', calories: '300' },
    prepTime: '15 min',
    cookTime: '10 min',
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    image: '/placeholder-image.jpg',
    macros: { protein: '40g', fat: '20g', carbs: '0g', calories: '450' },
    prepTime: '10 min',
    cookTime: '20 min',
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    image: '/placeholder-image.jpg',
    macros: { protein: '40g', fat: '20g', carbs: '0g', calories: '450' },
    prepTime: '10 min',
    cookTime: '20 min',
  },
  {
    id: 4,
    name: 'Grilled Salmon',
    image: '/placeholder-image.jpg',
    macros: { protein: '40g', fat: '20g', carbs: '0g', calories: '450' },
    prepTime: '10 min',
    cookTime: '20 min',
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    image: '/placeholder-image.jpg',
    macros: { protein: '40g', fat: '20g', carbs: '0g', calories: '450' },
    prepTime: '10 min',
    cookTime: '20 min',
  },
  // Add more recipes as needed
];

const savedRecipes = [
  {
    id: 1,
    name: 'Avocado Toast',
    image: '/placeholder-image.jpg',
    macros: { protein: '5g', fat: '15g', carbs: '20g', calories: '250' },
    prepTime: '5 min',
    cookTime: '0 min',
  },
  {
    id: 2,
    name: 'Spaghetti Bolognese',
    image: '/placeholder-image.jpg',
    macros: { protein: '25g', fat: '15g', carbs: '60g', calories: '600' },
    prepTime: '10 min',
    cookTime: '20 min',
  },
  // Add more saved recipes as needed
];

export default function RecipesPage() {
  const router = useRouter();

  const handleSubmitRecipeClick = () => {
    router.push('/submit-recipe');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipes</h1>
      <RecipeCarousel recipes={recipes} />

      <h1>Saved Recipes</h1>
      <RecipeCarousel recipes={savedRecipes} />

      {/* Submit Recipe Button */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitRecipeClick}
          style={{
            borderRadius: '50px',
            padding: '10px 30px',
            fontSize: '1rem',
            marginTop: '20px',
          }}
        >
          Submit a Recipe
        </Button>
      </div>
    </div>
  );
}