import { useState } from "react";

function MyForm1(props)
{

 const  [empid,setEmpid] = useState(1);
 const  [empname,setEmpname] = useState("namrata");
 const  [empsal,setEmpsal] = useState(5000);


 const handleSubmit = (event)=>{

    event.preventDefault();
    console.log('handle submit called');
   alert(empid+","+empname+","+empsal);
 }

 const handleChange = (event)=>{
    console.log('handle Change callback called...');
    const name = event.target.name;
    const value = event.target.value;
    console.log('target name:'+name+", target value:"+value);
    setEmpid(event.target.value);
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your empid:
                <input type='text'
                       name='empid'
                       value={empid}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empname:
                <input type='text'
                       name='empname'
                       value={empname}
                       onChange={(e)=>{setEmpname(e.target.value)}}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empsal:
                <input type='text'
                       name='empsal'
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

export default MyForm1;