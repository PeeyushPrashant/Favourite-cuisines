import React, { useState } from "react";
import "./styles.css";

const foodCard = {
  Biryani: [
    { name: "Chicken biryani", rating: "9/10" },
    { name: "Hyderabadi biryani", rating: "8.5/10" },
    { name: "Egg biryani", rating: "7/10" },
    { name: "Veg Dum biryani", rating: "6.7/10" }
  ],
  Pizza: [
    { name: "Margherita pizza", rating: "8.9/10" },
    { name: "Veg Supreme pizza", rating: "8.3/10" },
    { name: "Double cheese pizza", rating: "7.2/10" },
    { name: "Makhni pizza", rating: "6.5/10" }
  ],
  Dessert: [
    { name: "Rasmalai", rating: "9.3/10" },
    { name: "Chocolava cake", rating: "8.5/10" },
    { name: "Gulab Jamun", rating: "7.9/10" },
    { name: "Rabri Faluda", rating: "7.6/10" }
  ],
  Shake: [
    { name: "Oreo shake", rating: "9.1/10" },
    { name: "Butterscotch shake", rating: "8.4/10" },
    { name: "Vanilla shake", rating: "8/10" },
    { name: "Mango shake", rating: "7.8/10" }
  ]
};

var food = Object.keys(foodCard);

export default function App() {
  var [userchoice, setChoice] = useState("Biryani");

  function clickHandler(item) {
    setChoice(item);
  }

  return (
    <div className="App">
      <h1>
        <span>🍖</span> apnaZaika
      </h1>
      <p className="para">
        Check out my favourite cuisines. Select a type to get started
      </p>
      <div className="division">
        {food.map(function (item) {
          return (
            <div className="menu" onClick={() => clickHandler(item)}>
              {item}
            </div>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodCard[userchoice].map(function (item) {
            return (
              <li
                key={item.name}
                style={{
                  listStyleType: "none",
                  border: "1.8px dotted #6EE7B7",
                  padding: "0.9rem",
                  margin: "1rem 0rem",
                  width: "25rem",
                  height: "2.7rem",
                  borderRadius: "1rem"
                }}
              >
                <div
                  style={{
                    fontSize: "larger",
                    paddingBottom: "0.2rem",
                    fontFamily: "cursive"
                  }}
                >
                  {item.name}
                </div>
                <div style={{ fontSize: "smaller" }}>⭐{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
