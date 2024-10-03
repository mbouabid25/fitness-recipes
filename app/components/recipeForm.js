"use client"; // Ensure it's a client component

import { useState } from 'react';
import { TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material'; // Use Material UI components

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    protein: '',
    fat: '',
    carbs: '',
    calories: '',
    prepTime: '',
    cookTime: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state for feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setOpenSnackbar(true); // Show success message
      setFormData({
        name: '',
        image: '',
        protein: '',
        fat: '',
        carbs: '',
        calories: '',
        prepTime: '',
        cookTime: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        width: '100%', 
        maxWidth: '500px', 
        margin: '0 auto', 
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Submit a New Recipe
      </Typography>
      
      <TextField 
        label="Recipe Name" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <TextField 
        label="Image URL" 
        name="image" 
        value={formData.image} 
        onChange={handleChange} 
      />
      <TextField 
        label="Protein (g)" 
        name="protein" 
        value={formData.protein} 
        onChange={handleChange} 
      />
      <TextField 
        label="Fat (g)" 
        name="fat" 
        value={formData.fat} 
        onChange={handleChange} 
      />
      <TextField 
        label="Carbs (g)" 
        name="carbs" 
        value={formData.carbs} 
        onChange={handleChange} 
      />
      <TextField 
        label="Calories" 
        name="calories" 
        value={formData.calories} 
        onChange={handleChange} 
      />
      <TextField 
        label="Prep Time (minutes)" 
        name="prepTime" 
        value={formData.prepTime} 
        onChange={handleChange} 
      />
      <TextField 
        label="Cook Time (minutes)" 
        name="cookTime" 
        value={formData.cookTime} 
        onChange={handleChange} 
      />

      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ padding: '10px 20px', borderRadius: '50px' }}
      >
        Add Recipe
      </Button>

      {/* Snackbar for feedback */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Recipe added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}