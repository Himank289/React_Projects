import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
                                     setCount((count) => count + 1);
                                 }
                             , 2000
                           );

  return () => clearTimeout(timer) //cleanup using return fucntion at the end of useEffect hook
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;