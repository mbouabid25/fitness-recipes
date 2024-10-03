"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from '@mui/material';
import * as React from 'react';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the content takes up the full height of the viewport
        textAlign: 'center', // Center text horizontally
        padding: '20px', // Add some padding
      }}
    >
     <h1 style={{ fontSize: '6rem' }}>
      Fuel Your Journey: Recipes Tailored for Cutting or Bulking
     </h1>
      <h2 style={{ fontSize: '1.5rem' }}>
        Whether you’re cutting to get lean, bulking to build muscle, or body-recomping, we’ve got you covered with macro and calorie-counted recipes designed to fit your goals. Track your macros with ease and make every meal count!
      </h2>

      
      {/* Round Button */}
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          borderRadius: '50px',
          padding: '10px 30px',
          fontSize: '1rem',
          marginTop: '20px'
        }}
      >
        Explore Dishes
      </Button>
      <h1 style={{ fontSize: '5rem' }}>
      Save all your recipes in one place
     </h1>
     <h2 style={{ fontSize: '1.5rem' }}>
     Save recipes from any website to a digital recipe box, making it easy to create, organize, and share your cooking inspiration.
      </h2>
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          borderRadius: '50px',
          padding: '10px 30px',
          fontSize: '1rem',
          marginTop: '20px'
        }}
      >
        Never Lose a Recipe
      </Button>
      <h1 style={{ fontSize: '5rem' }}>
      Discover new dishes you’ll love
     </h1>
     <h2 style={{ fontSize: '1.5rem' }}>
     Recipe communities on Samsung Food help you share and discover the recipes that fit your eating preferences, restrictions, needs, and more.
      </h2>
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          borderRadius: '50px',
          padding: '10px 30px',
          fontSize: '1rem',
          marginTop: '20px'
        }}
      >
        Find your new go-tos
      </Button>
      <h1 style={{ fontSize: '5rem' }}>
      Make meal plans you’ll actually want to follow
     </h1>
     <h2 style={{ fontSize: '1.5rem' }}>
     Drag and drop your personal recipe collection into a weekly meal plan. Whether you’re looking to save time, waste less, or eat better, Samsung Food meal planner makes it easy to achieve your goals.
      </h2>
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          borderRadius: '50px',
          padding: '10px 30px',
          fontSize: '1rem',
          marginTop: '20px'
        }}
      >
        Have a delicious week
      </Button>
    </div>
  );
}
