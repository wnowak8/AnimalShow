import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './AnimalShow.css';
const App = () => {
  const [count, setCount] = useState(0);

  const [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
  };

  const handleClick = () => {
    setCount(count + 1);

    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal) => {
    return <AnimalShow type={animal} />;
  });

  return (
    <div>
      <div>Lista zwierzaków</div>

      <button onClick={handleClick}>Dodaj zwierzaka</button>

      <div>{renderedAnimals}</div>

      <div>Ilość zwierzaków: {count}</div>
    </div>
  );
};

export default App;
