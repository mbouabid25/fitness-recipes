// app/submit-recipe/page.js
"use client"; // Ensure this is a client-side component

import AddRecipeForm from '../components/recipeForm'; // Import the form component

export default function SubmitRecipePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Submit a Recipe</h1>
      <AddRecipeForm /> {/* Render the form */}
    </div>
  );
}