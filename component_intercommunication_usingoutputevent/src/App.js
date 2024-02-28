import logo from './logo.svg';
import './App.css';
import AddEmp from './AddEmp';

import {useState} from 'react';

function App() {


   const emp = {empid:3,empname:'Raj',empsal:5000};

   const  [emparr,setEmparr] =useState([{empid:1,empname:'ram',empsal:5000},
                                      {empid:2,empname:'mita',empsal:3000}]);


  const addNewEmp = (emp)=>{

    console.log('addNewEmp function called..');
    console.log('emp communicated from child to parent is:');
    console.log(emp);
    setEmparr([...emparr,emp]);
  }

  return (
    <div className="App">

      <AddEmp empadd={(emp)=>{addNewEmp(emp)}}
          empid={emp.empid}
          empname={emp.empname}
          empsal={emp.empsal}
          />
      <hr/>

      <ul>
          {

             emparr.map(e=><li key={e.empid}>{e.empid},{e.empname},{e.empsal}</li>)
          }
        </ul>
      
   
    </div>
  );
}

export default App;
