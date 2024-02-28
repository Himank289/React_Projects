
import {EmpContext} from './App';
import {useState,useContext} from 'react';

function AddEmp()
{  const[emp,setEmp] =  useState({empId:3,
                                  empName:'Meenal',
                                  empSalary:9000});

  
   const {addEmp} = useContext(EmpContext);

   const handleSubmit = (event)=>   
    {
        event.preventDefault();
        addEmp(emp);
    }
    return(

        <form onSubmit={handleSubmit}>
            <label>
                empid:
                <input type='text'  
                   value={emp.empId}
                   onChange={e=>{setEmp({...emp,empId:e.target.value}); }}
            />
                            
            </label> <br/>
            <label>
                empname:
                <input type="text" 
                       value={emp.empName} 
            onChange={(e)=>setEmp({...emp,empName:e.target.value})} 
            />
             
            </label> <br/>
            <label>
                empsalary:
                <input type="text" 
                       value={emp.empSalary} 
           onChange={(e)=>setEmp({...emp,empSalary:e.target.value})} 
              />
            </label><br/>
            <input type="submit" />        
        </form>
    );
}

export default AddEmp;