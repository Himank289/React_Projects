import { useState } from "react";

function MyForm1(props)
{
    const [inputs,setInputs] = useState({});
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.username +', '+inputs.age+', '+inputs.myCar);
    }

    const handleChange = (event) =>
    {
         const name = event.target.name;
          const value = event.target.value;
          setInputs((pv)=>{ 
            return {
                ...pv,
                [name]:value //this will add property as well as value to inputs object
                               //to update/add the property use square  bracket around property name
              //note:here property name added is same as input control name attribute value
                            };
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
            UserName :    
            <input type='text'  
                   name='username'
                   //first-time inputs object is empty so there is no inputs.username property
                   value={inputs.username || ''} 

                   //this will add username property to inputs object along with its value
                   onChange={handleChange}
            />
            </label> 
            <label>
            Age :    
            <input type='text'  
                   name='age'
                    //first-time inputs object is empty so there is no inputs.age property 
                   value={inputs.age || ''}
                    //this will add age property to inputs object along with its value
                   onChange={handleChange}
            />
            </label>
            <select name ='myCar' value={inputs.myCar||'Fiat'} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <input type='submit' />
        </form>
    );

  
}
export default MyForm1;