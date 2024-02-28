

import {useState} from 'react';

function AddEmp(props)
{

    const initemp = {empid:props.empid,empname:props.empname,empsal:props.empsal};   

    const  [emp,setemp] = useState(initemp);

 

    const handleSubmit = (event)=>{

        event.preventDefault();
        console.log('handle submit called');
       alert(emp.empid+","+emp.empname+","+emp.empsal);
    
       console.log('on submit...');
       console.log(emp);

       //pass this emp to parent component by invoking custom event - empadd
        props.empadd(emp);
      


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

            </>
        );
}

export default AddEmp;