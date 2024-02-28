import {useState,useEffect} from 'react';
import axios from 'axios';
function EmpCrudHttp()
{
  

  const [emparr,setEmparr]=useState([]);

  const [emp,setEmp]=useState({id:3,empName:'Rita',empSalary:2000});


  const url = 'http://localhost:8085/';

  const getAllEmps = () => {

      axios.get(url+'emps')
      .then((response)=>{

            const allemps = response.data;
            console.log(allemps);
            setEmparr(allemps);
            console.log(emparr);
        
          }
      )
      .catch((error)=>{

          console.log(error);

      });
  }

  /*
   const deleteEmp = (id)=>{
    console.log('deleteEmp called with id:'+id);
        axios.delete(url+'emp/'+id)
        .then((response)=>{

              const isdeleted = response.data;
              console.log(isdeleted);
              setEmparr((current) =>
              current.filter((emp) => emp.id !== id));
        })
        .catch((error)=>{

            console.log(error);

        });
   }
   */

   //async-await is just a wrapper around promise, to make it's coding easier
   //An async function is different than a sync function in that 
   //an async function doesn’t block the processing of the code below it.
   const deleteEmp = async (id)=>{

    console.log('inside async delete:deleteEmp called with id:'+id);

    //instead of .then and .catch clause, use await from inside try-catch block
    try
     {
      //await can be used only from async function, you can use the await keyword 
      //before a call to a function that returns a promise
      //await blocks the execution of the code only in try block
      //till response is available
       let response = await axios.delete(url+'emps/'+id);
     
            const isdeleted = response.data;
              console.log(isdeleted);
              setEmparr((current) =>
              current.filter((emp) => emp.id !== id));
     }
     catch(error)
     {
        console.log("Error:"+error);
     }
     finally
     {
        console.log('finally always runs!');
     }
   }

   const updateEmp = (e)=>{
    console.log('update emp with id:'+e.id);
    setEmp(e);
   }

  //step 3:code submit handler,add or update emp to emparray
 // function submitHandler(e)
  const submitHandler = (event)=>{
            event.preventDefault();
            //submitted emp
            console.log(emp);
            add(emp);
          }

  const add = (emp)=>{

    let allemps = [];
    axios.get(url+'emps')
    .then((response)=>{

          allemps = response.data;
          console.log('calling getallemps in empadd')
          console.log(allemps);

          console.log('emp to be find..:');
     console.log(emp);
     const ele = allemps.find(e => e.id==emp.id);
     console.log('after trying to find emp in getallemps array..ele=');
     console.log(ele);

    if(ele===undefined)
    {
      console.log('inside if ele===undefined');
    axios.post(url+'emps',{
        empName:emp.empName,
        empSalary:emp.empSalary,
        id:emp.id
       })
       .then((response)=>{
 
        console.log(response.status);
       
           //new emp created so add to array  
           setEmparr([...emparr,emp]);
           //empty the emp behind the form
        setEmp({...emp,id:'',empName:'',empSalary:''});  
        })
    } 
    else if(ele.id!==undefined) 
    {
      console.log('inside if ele!==undefined');
      axios.put(url+'emps/'+emp.id,{
        empName:emp.empName,
        empSalary:emp.empSalary,
        id:emp.id
       })
       .then((response)=>{
        console.log(response.status);
              //update the emp that is present in the list
     const newemparr = emparr.map(curremp => {
      if (curremp.id == emp.id) {
          console.log('emp match found:update emp');
          //emp already present so update curremp 
          return {...curremp, empName:emp.empName,
                               empSalary:emp.empSalary};
       }
       else 
       {  // curre emp not matched return as is
         console.log('otherwise return current emp as is'); 
        return curremp;
       }
     });
     setEmparr(newemparr);
   //empty the emp behind the form
    setEmp({...emp,id:'',empName:'',empSalary:''}); 
 
           })      
          
        }    
        
      
        }
    )
    .catch((error)=>{

        console.log(error);

    });

     
       
    }
             
                           
     
//useEffect hook will run first time
//component is rendered, as sec arg is empty array
     useEffect(() => {
          getAllEmps();
        }, []);

  return(<>

  
   {/* step 2:create emp form to add emp */}
   
   <form onSubmit={(e)=>{submitHandler(e)}}>
   <label>
      id:    <br/>
      <input type='text'
             name='id'
             placeholder='id'
             value={emp.id}
             onChange={(e)=>{setEmp({...emp,id:e.target.value})}}
           
         />
   </label> <br/>
   <label>
      EmpName:    <br/>
      <input type='text'
             name='empname'
             placeholder='empname'
             value={emp.empName}
             onChange={(e)=>{setEmp({...emp,empName:e.target.value})}}
        
      />
   </label> <br/>
   <label>
      EmpSal:    <br/>
      <input type='text'
             name='empsal'
             placeholder='empsal'
             value={emp.empSalary}
             onChange={(e)=>{setEmp({...emp,empSalary:e.target.value})}}
      />
   </label> <br/>
   <input type='submit' value='Add Emp' />
   </form>
   <hr/>
  
    {/* step 4:show emp array in the html table */}
    <table>
    <thead>
     <tr>
       <th>id</th>
       <th>empname</th>
       <th>empsal</th>
       <th>delete emp</th>
       <th>update emp</th>
     </tr>
    </thead>
    <tbody>
      
       {emparr.map(
           e=><tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.empName}</td>
                  <td>{e.empSalary}</td>
                  <td><button onClick={()=>{deleteEmp(e.id)}}>
                              Delete
                      </button>
                  </td>
                  <td><button onClick={()=>{updateEmp(e)}} >
                        Update
                      </button>
                  </td>
               </tr>
       )}
    </tbody>
   </table>
  
  </>);
}
export default EmpCrudHttp;
