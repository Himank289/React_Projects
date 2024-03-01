import { useEffect, useState } from "react";


function UseEffectEx()
{

    const[count,setcount]=useState(0);

    useEffect(()=>{
            console.log('use effect hook called');


    });  //it will render only once if empty square bracket is used as second argument

    const changect=()=>
    {
        let temp=count+1;
        console.log('inside changect:'+count);
        setcount(temp);
    }

    return(

        <>
        <button onClick={changect}>change count</button>
        <h3>The count value is {count}</h3>
        
        
        
        </>



    );
}

export default UseEffectEx;