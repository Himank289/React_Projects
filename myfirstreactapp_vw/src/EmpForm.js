import { useState } from "react";



function ShowEmployee(props)
{
    return(
            <li>
              {props.empid}<br/>
              {props.empname}<br/>
              {props.empsal}<br/>
            </li>
          );
}

function EmpForm(props){

    const [empid,setempid] = useState(props.empid);
    const [empname,setempname] = useState(props.empname);
   const [empsal,setempsal] = useState(props.empsal);

   const [emparr,setemparr]=useState([{'empid':1,'empname':'Shyam','empsal':500}]);

    
   const AddEmp = (event)=>{
    event.preventDefault();
    alert('Emp added...');
    console.log(empid+","+empname+","+empsal);
    setemparr([...emparr,{'empid':empid,'empname':empname,'empsal':empsal}]);
}

    
    return(

        <div>
            <h1>Employee</h1>
            <form onSubmit={AddEmp}>
            <label>Employeeid:
         <input
             type="number"
             value={empid}
             onChange={(e) => setempid(e.target.value)}
         />
        </label> <br/>

        <label>EmployeeName:
         <input
             type="Text"
             value={empname}
             onChange={(e) => setempname(e.target.value)}
         />
        </label> <br/>

        <label>EmployeeSalary:
         <input
             type="number"
             value={empsal}
             onChange={(e) => setempsal(e.target.value)}
         />
        </label> <br/>
        <input type='submit' />
         </form>

         <div>
           <p>Employee details!</p>
            {empid}<br/>
            {empname}<br/>
            {empsal}<br/>
        </div>


        <h1>List of Employess</h1>
        <ul>
           {emparr.map(e=> <ShowEmployee key={e.empid} empid={e.empid} empname={e.empname} empsal={e.empsal} />)}
        </ul>
    </div>

    );
}

export default EmpForm;



