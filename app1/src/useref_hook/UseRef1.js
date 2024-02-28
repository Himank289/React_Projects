/*
import {useState} from "react";
function UseRef1(props) {
      const [count, setCount] = useState(0);
      
      const handle = () => {
        const updatedCount = count + 1;
        console.log(`Clicked ${updatedCount} times`);
        setCount(updatedCount);
      };

      console.log('I rendered!');
      return <button onClick={handle}>Click me</button>;
    }
*/

import { useRef } from 'react';
function UseRef1() {
  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++; //changing ref does not trigger re-render
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}


export default UseRef1;