import { useState } from "react";

function MyForm(props)
{
    const [name,setName] = useState("Namrata");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name entered is ${name}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Name :    
            <input type='text'  
                   value={name}
                   onChange={e=>{ setName(e.target.value); }}
            />
            </label> 
            <input type='submit' />
        </form>
    );

  
}
export default MyForm;