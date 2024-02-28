import { useState } from "react";

function Employee(props)
{
    

/*
    const [emp,setEmp] = useState({
                                     empid:1,
                                     empname:'Sita',
                                     empsal:5000
                                  });  
*/
   const [emp,setEmp] = useState({
                                     empid:props.eid,
                                     empname:props.ename,
                                     empsal:props.esal
                                });  


    const updateEmp = () =>  {

        console.log('inside updateEmp');

        setEmp(prevemp =>{
            return {...prevemp,empsal:15000,empname:'Mita'}
        });
    }
   
    return(
        <>
        <div>
            <p>{emp.empid}</p><br/>
            <p>{emp.empname}</p> <br/>
            <p>{emp.empsal}</p>
        </div>

        <button onClick={updateEmp}>Update Employee</button>
        </>
    );

}

export default Employee;