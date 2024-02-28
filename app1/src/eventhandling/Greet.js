function Greet(props) {
    const greet = (a) => {
    if(a)
     alert(a);
    else 
     alert('Hello Everyone!');
    }
  
    const greet1 = () => alert('Hello Everyone!');

    //2nd arg 'b' contains React event object
    const greet2 = (a,b)=> { alert(b.type);  alert(a);} 

    return (
      <div>  

      {/* can use just function name in cruly bracket if function doesnt accept an argument  */}  
       <button onClick={greet1}>Greet Everyone</button>
      
      {/*Passing Arguments:To pass an argument to an event handler, use an arrow function.*/}  
      <button onClick={() => greet('Good Morning!')}>Greet Everyone with args!</button>

      {/* Event handlers have access to the React event that triggered the function.*/}
      <button onClick={(event) => greet2('Good Morning!',event)}>
        Greet Everyone with args and event!
      </button>
      </div>
    );
  }

  export default Greet;

  //Note:pass arrow function to onClick inside curly braces , if you j