"use client"
import React, { useState } from 'react';

export default function RecipeCarousel({ recipes }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate total slides based on the number of items visible (3 at a time in this case)
  const totalSlides = Math.ceil(recipes.length / 3); // Change this number based on how many you want visible

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        {recipes.map((recipe, index) => (
          <div
            className="carousel-item"
            key={recipe.id}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
              flex: '0 0 33.33%', // Each slide will take up 1/3 of the carousel's width
            }}
          >
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Protein: {recipe.macros.protein}</p>
            <p>Fat: {recipe.macros.fat}</p>
            <p>Carbs: {recipe.macros.carbs}</p>
            <p>Calories: {recipe.macros.calories}</p>
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Cook Time: {recipe.cookTime}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNextSlide}>
        &#10095;
      </button>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .carousel-slide {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          box-sizing: border-box;
          padding: 20px;
          text-align: center;
          border: 1px solid #ccc; /* Thin outline around the card */
          border-radius: 8px;
        }
        .carousel img {
          max-width: 100%;
          border-radius: 8px;
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 24px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .prev {
          left: 10px;
        }
        .next {
          right: 10px;
        }
        .carousel-button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}