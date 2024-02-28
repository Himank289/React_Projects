import { useState } from "react";

function MyForm2(props)
{

 const  [formvalue,setformvalue] = useState({});


 const handleSubmit = (event)=>{

    event.preventDefault();
    console.log('handle submit called');
   alert(formvalue.empid+","+formvalue.empname+","+formvalue.empsal);

   console.log('on submit...');
   console.log(formvalue);
   
 }

 const handleChange = (event)=>{
    console.log('handle Change callback called...');
    const name = event.target.name;
    const value = event.target.value;
    console.log('target name:'+name+", target value:"+value);
    setformvalue(prev=>({...prev,[name]:value}));
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your empid:
                <input type='text'
                       name='empid'
                       value={formvalue.empid||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empname:
                <input type='text'
                       name='empname'
                       value={formvalue.empname||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empsal:
                <input type='text'
                       name='empsal'
                       value={formvalue.empsal||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <input type="submit" />
        </form>
        <hr/>
        <div>
            <p>{formvalue.empid},{formvalue.empname},{formvalue.empsal}</p> 
        </div>
        </>
    );
}

export default MyForm2;