import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car(props) {
 // const c =   props.car;
  const c = {
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  }
  const [car, setCar] = useState(c);

  /*
  Because we need the current value of state, we pass a function into our setCar function. 
  This function receives the previous value.
   We then return an object, spreading the previousState and overwriting only the color.
   */
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )


/*
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <button
        type="button"
        onClick={()=> { setColor("blue"); setYear("2000");}}
      >change color and year</button>
    </>
  )
  */

}

export default Car;