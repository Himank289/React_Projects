import './App.css';
import {createContext,useState,useContext} from 'react';
import AddEmp from './AddEmp';
import ListEmp from './ListEmp';


const EmpContext = createContext();    
export {EmpContext};    

const arr =[
                {empId:1,empName:'Ram',empSalary:2000},
                {empId:2,empName:'Shyam',empSalary:5000}    
               ];



function App() {

     const [emparr,setEmparr] = useState(arr);
   

    const addEmp = (e) =>
    {
        console.log('add emp called'+e.empId);
         
        setEmparr([...emparr,e]);
     
     }
      

    return (
   <EmpContext.Provider value={{emparr,addEmp}}>
      <section>
        <p>Total no of Emps : {emparr.length} </p>
      </section>
      <section>       
         <AddEmp />
      </section>
      <section>
        <ListEmp />
      </section>
   </EmpContext.Provider>
  );

}




export default App;
