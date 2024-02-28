import { useState, createContext, useContext, useRef} from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();


export default function UseContextEx() {
  const [user, setUser] = useState("Namrata Marathe");

  function changeUser(name) {
    setUser(name);
  }

  return (
    <UserContext.Provider value={{user,changeUser}}>
      <h1>{`Top Component:Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const {user,changeUser} = useContext(UserContext);
  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const {user,changeUser} = useContext(UserContext);

  const inputEle = useRef();

    const handleChange = (event) => {
       
        //inputEle.current is reference to HtmlInputElement
        console.log(inputEle.current.value);
          alert(`entered text value is ${inputEle.current.value}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The final input value you entered is: ${inputEle.current.value}`);
        inputEle.current.focus();
        changeUser(inputEle.current.value);
    }


    return (
      <div>
        <p>Deeply Nested Component5: Hi {user}</p>
        <form  onSubmit={handleSubmit}>
      {/*  <input  type="Text"  ref={inputEle} onChange={handleChange}/> */}
        <input  type="Text"  ref={inputEle} />
        <input type="submit" />
        </form>
      </div>
    );
}