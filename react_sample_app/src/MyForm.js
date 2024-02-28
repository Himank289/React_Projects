import { useState } from "react";

function MyForm(props)
{

 const  [empid,setEmpid] = useState(1);
 const  [empname,setEmpname] = useState("namrata");
 const  [empsal,setEmpsal] = useState(5000);


 const handleSubmit = (event)=>{

    event.preventDefault();
    console.log('handle submit called');
   alert(empid+","+empname+","+empsal);
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your empid:
                <input type='text'
                       value={empid}
                       onChange={(e)=>{setEmpid(e.target.value)}}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empname:
                <input type='text'
                       value={empname}
                       onChange={(e)=>{setEmpname(e.target.value)}}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empsal:
                <input type='text'
                       value={empsal}
                       onChange={(e)=>{setEmpsal(e.target.value)}}
                />
                            
            </label>
            <br/>
            <input type="submit" />
        </form>
        <hr/>
        <div>
            <p>{empid},{empname},{empsal}</p> 
        </div>
        </>
    );
}

export default MyForm;