import { arr } from "./data";

// function No(props){

//     return(
//         <p>props.no</p>

//     );
// }



function Listnos(props){
    let arr1=arr;

    return(

        <>
        <h1>List of numbers</h1>
      <ul>
        {arr.map((no,index) => <li key={index}>{no}</li>)}
      </ul>
        
        
        </>
    );
}

export default Listnos;