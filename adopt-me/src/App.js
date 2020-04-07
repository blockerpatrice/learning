import React from 'react';
import {render} from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement(
    "div",
    {}, //this is an empty object
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Parrot",
      }),
      React.createElement(Pet, {
        name: "Boonkers",
        animal: "Cat",
        breed: "Tabby",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
