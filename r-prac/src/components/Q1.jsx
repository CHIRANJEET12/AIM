import React, { useState } from "react";
import recipesData from "./recipesData.js"
import "./styles.css";

const RecipeFilterApp = () => {

  const [rate, setRate] = useState();
  const [card, setCard] = useState(0);
  const [currentrating, setcurrentrating] = useState(rate);

  function rateChange(e) {
    setRate(e.target.value);
  }

  function cartt() {
    setCard(card + 1);
  }

  const filteredRecipes = rate ? recipesData.filter((r) => r.rating >= parseFloat(rate)) : recipesData;

  const numberOfRecipes = filteredRecipes.length;

  const averageRating = numberOfRecipes
    ? (
      filteredRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) /
      numberOfRecipes
    ).toFixed(2)
    : 0;

  const ratingoptions = [...new Set(recipesData.map((r) => r.rating.toFixed(1)))].sort();

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>
      <p>Filter by  Rating:</p>
      <select onChange={rateChange} value={rate}>
        {ratingoptions.map(
          (r) => (
            <option key={r} value={r}>
              {r}
            </option>
          )
        )
        }
      </select>

      <h3>Card Item: {card}</h3>

      <h2>Average Rating: {averageRating}</h2>
      <p>Recipes available: {numberOfRecipes}</p>



      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} width="150" />
            <h3>{recipe.name}</h3>
            <p>{recipe.cuisine}</p>
            <p>Rating: {recipe.rating}</p>
            <button onClick={cartt}>Add to cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecipeFilterApp;












// export default recipesData = [
//   {
//     id: 1,
//     name: "Classic Margherita Pizza",
//     cuisine: "Italian",
//     image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//     rating: 4.6,
//     reviewCount: 98,
//   },
//   {
//     id: 2,
//     name: "Vegetarian Stir-Fry",
//     cuisine: "Asian",
//     image: "https://cdn.dummyjson.com/recipe-images/2.webp",
//     rating: 4.7,
//     reviewCount: 26,
//   },
//   {
//     id: 3,
//     name: "Chocolate Chip Cookies",
//     cuisine: "American",
//     image: "https://cdn.dummyjson.com/recipe-images/3.webp",
//     rating: 4.9,
//     reviewCount: 13,
//   },
//   {
//     id: 4,
//     name: "Chicken Alfredo Pasta",
//     cuisine: "Italian",
//     image: "https://cdn.dummyjson.com/recipe-images/4.webp",
//     rating: 4.9,
//     reviewCount: 82,
//   },
//   {
//     id: 5,
//     name: "Mango Salsa Chicken",
//     cuisine: "Mexican",
//     image: "https://cdn.dummyjson.com/recipe-images/5.webp",
//     rating: 4.9,
//     reviewCount: 63,
//   },
//   {
//     id: 6,
//     name: "Quinoa Salad with Avocado",
//     cuisine: "Mediterranean",
//     image: "https://cdn.dummyjson.com/recipe-images/6.webp",
//     rating: 4.4,
//     reviewCount: 59,
//   },
//   {
//     id: 7,
//     name: "Tomato Basil Bruschetta",
//     cuisine: "Italian",
//     image: "https://cdn.dummyjson.com/recipe-images/7.webp",
//     rating: 4.7,
//     reviewCount: 95,
//   },
//   {
//     id: 8,
//     name: "Beef and Broccoli Stir-Fry",
//     cuisine: "Asian",
//     image: "https://cdn.dummyjson.com/recipe-images/8.webp",
//     rating: 4.7,
//     reviewCount: 58,
//   },
//   {
//     id: 9,
//     name: "Caprese Salad",
//     cuisine: "Italian",
//     image: "https://cdn.dummyjson.com/recipe-images/9.webp",
//     rating: 4.6,
//     reviewCount: 82,
//   },
//   {
//     id: 10,
//     name: "Shrimp Scampi Pasta",
//     cuisine: "Italian",
//     image: "https://cdn.dummyjson.com/recipe-images/10.webp",
//     rating: 4.3,
//     reviewCount: 5,
//   },
// ];
