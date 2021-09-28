import React, { useState } from "react";
import "./styles.css";

const foodCard = {
  Biryani: [
    {
      name: "Chicken biryani",
      description:
        "Prepared using basmati rice which contains protein, carbohydrates & fats.",
      rating: "9/10"
    },
    {
      name: "Hyderabadi biryani",
      description:
        "Made with rice and goat meat and cooked with dum pukt method.",
      rating: "8.5/10"
    },
    {
      name: "Egg biryani",
      description:
        "Fragrant rice cooked with aromatic biryani spices & boiled eggs in a pot.",
      rating: "7/10"
    },
    {
      name: "Veg Dum biryani",
      description:
        "A popular spice and vegetables mixed favoured rice prepared by layering the biryani gravy.",
      rating: "6.7/10"
    }
  ],
  Pizza: [
    {
      name: "Margherita pizza",
      description:
        "Pizza featuring bubbly crust, crushed San Marzano tomato sauce & fresh mozarella.",
      rating: "8.9/10"
    },
    {
      name: "Veg Supreme pizza",
      description:
        "Pizza having pepporoni and sausage & few other meat variations.",
      rating: "8.3/10"
    },
    {
      name: "Double cheese pizza",
      description:
        "A layer of toasted parmesan baked into the crust of Original Pan pizza.",
      rating: "7.2/10"
    },
    {
      name: "Makhni pizza",
      description:
        "Pizza with a blend of Capsicum on Makhani sauce, loaded with delicious toppings. ",
      rating: "6.5/10"
    }
  ],
  Dessert: [
    {
      name: "Rasmalai",
      description:
        "Rasmalai are soft,spongy cheese dumplings soaked in sweet vanilla & saffron milk.",
      rating: "9.3/10"
    },
    {
      name: "Chocolava cake",
      description:
        "It's a uniqe combination of traditional choclate cake, wheat flour and cocoa powder.",
      rating: "8.5/10"
    },
    {
      name: "Gulab Jamun",
      description:
        "They are soft delicious berry sized balls made of milk solids & flour.",
      rating: "7.9/10"
    },
    {
      name: "Rabri Faluda",
      description:
        "An indain cold dessert from northern part of India made using ice-cream.",
      rating: "7.6/10"
    }
  ],
  Shake: [
    {
      name: "Oreo shake",
      description:
        "Made by combining vanilla ice-cream,milk & a few oreo cookies.",
      rating: "9.1/10"
    },
    {
      name: "Butterscotch shake",
      description:
        "Made by combining vanilla ice-cream,frozen yogurt & sliced banana.",
      rating: "8.4/10"
    },
    {
      name: "Vanilla shake",
      description: "Made with whipped cream & choclate vermicelli.",
      rating: "8/10"
    },
    {
      name: "Mango shake",
      description: "Made by blending chopped ripe & sweet mangoes with milk.",
      rating: "7.8/10"
    }
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
                  height: "5rem",
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
                <div style={{ padding: "0.1rem 0rem 0.2rem 0rem" }}>
                  {item.description}
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
