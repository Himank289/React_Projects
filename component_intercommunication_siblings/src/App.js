
import './App.css';
import AddEmp from './AddEmp';
import ListEmp from './ListEmp';

import {useState} from 'react';

function App() {


   const emp = {empid:3,empname:'Raj',empsal:5000};

   const  [emparr,setEmparr] =useState([{empid:1,empname:'ram',empsal:5000},
                                      {empid:2,empname:'mita',empsal:3000}]);


 

  return (
    <div className="App">

      <AddEmp setEmparr={(emp)=>{setEmparr([...emparr,emp])}}
          empid={emp.empid}
          empname={emp.empname}
          empsal={emp.empsal}
          />
      <hr/>

     <ListEmp emparr={emparr} /> 
 
   
    </div>
  );
}

export default App;
