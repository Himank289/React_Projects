import { useState } from "react";

/*
EmpLibEx component should be able to accept multiple book details from end-user and
add each book to the book-list.
It should also show the last added book details as well as the entire book list on the UI
*/
function EmpLibEx(props)
{

 const initemp = {empid:props.empid,empname:props.empname,empsal:props.empsal};   

 const  [emp,setemp] = useState(initemp);
 const  [emparr,setEmparr] =useState([{empid:1,empname:'ram',empsal:5000},
                                      {empid:2,empname:'mita',empsal:3000}]);



 const handleSubmit = (event)=>{

    event.preventDefault();
    console.log('handle submit called');
   alert(emp.empid+","+emp.empname+","+emp.empsal);

   console.log('on submit...');
   console.log(emp);
   setEmparr([...emparr,emp]);

   //emp-form reset - original state
   //setemp({});
   setemp(initemp);
   
 }

 const handleChange = (event)=>{
    console.log('handle Change callback called...');
    const name = event.target.name;
    const value = event.target.value;
    console.log('target name:'+name+", target value:"+value);
    setemp(prev=>({...prev,[name]:value}));
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your empid:
                <input type='text'
                       name='empid'
                       value={emp.empid||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empname:
                <input type='text'
                       name='empname'
                       value={emp.empname||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <label>
                Enter your empsal:
                <input type='text'
                       name='empsal'
                       value={emp.empsal||""}
                       onChange={handleChange}
                />
                            
            </label>
            <br/>
            <input type="submit" />
        </form>
        <hr/>
        <div>
            <p>{emp.empid},{emp.empname},{emp.empsal}</p> 
        </div>
        <hr/>
         Emp Array:
            <table>
            <thead>
                <tr>
                <td>{'empid'}</td>
                <td>{'empname'}</td>
                <td>{'empsal'}</td>
                </tr>
            </thead>
                <tbody>
            {
               emparr.map(e=><tr key={e.empid}>
                       <td>{e.empid}</td>
                       <td>{e.empname}</td>
                       <td>{e.empsal}</td>
                       </tr>)
            }
        </tbody>
        </table>
<hr/>

        <hr/>
        <ul>
        Emp Array:
          {

             emparr.map(e=><li key={e.empid}>{e.empid},{e.empname},{e.empsal}</li>)
          }
        </ul>
         
        </>
    );
}

export default EmpLibEx;