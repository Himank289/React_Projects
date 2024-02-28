

import {useState,useEffect} from 'react';
import axios from 'axios';


function AddEmp(props)
{

    const initemp = {id:props.empid,empName:props.empname,empSalary:props.empsal};   

    const  [emp,setemp] = useState(initemp);
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState();


    useEffect(()=>{

        console.log('isPosting or error variable changed,AddEmp component is being rerendered');
        console.log(isPosting);
        console.log(error);
    
    },[isPosting,error]);
    
        const url = 'http://localhost:8085/';
      
        const postEmp = async (emp)=>{
        setIsPosting(true);
        let response = await axios.post(url+'emps',emp)
        if (response.status == 201) {
            console.log(response.data);
            setIsPosting(false)
            setError(false);
            return;
        }
        else
         {
            setError(response.error); 
          }
        }
       

 
    const handleSubmit = (event)=>{

        event.preventDefault();
        console.log('handle submit called');
       alert(emp.id+","+emp.empName+","+emp.empSalary);
    
       console.log('on submit...');
       console.log(emp);
       postEmp(emp);
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
            <div className='container'>
            <form onSubmit={handleSubmit}>

             <div className="form-group">
                <label>
                    Enter your empid:
                    <input type='text'
                           className="form-control"
                           name='id'
                           value={emp.id||""}
                           onChange={handleChange}
                    />
                                
                </label>
                </div>
                
                <div className="form-group">
                <label>
                    Enter your empname:
                    <input type='text'
                           className="form-control"
                           name='empName'
                           value={emp.empName||""}
                           onChange={handleChange}
                    />
                                
                </label>
                </div>
             
                <div className="form-group">
                <label>
                    Enter your empsalary:
                    <input type='text'
                           className="form-control"
                           name='empSalary'
                           value={emp.empSalary||""}
                           onChange={handleChange}
                    />
                                
                </label>
                </div>
                <br/>
                <input className="btn btn-success" type="submit" />
            </form>
            <hr/>
            <div>
              
               {emp.id && <p> {emp.id},{emp.empName},{emp.empSalary}</p> }
               <hr/>
             
               {isPosting==true && error==undefined && <p>emp is being posted to server</p>}
               {isPosting==false && error==false && <p>emp posted successfully to server!</p>}
               {isPosting==false && error && error==true &&
                   <p>There is some error while posting emp to server: error is: {error}</p>}
              
               
            </div>

            </div>
        );
}

export default AddEmp;