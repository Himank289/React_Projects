import {EmpContext} from './App';
import {useContext} from 'react';


function ListEmp()
{
  const {emparr} = useContext(EmpContext);

  return(
    <ul>
      {emparr.map(e=><li key={e.empId}> 
                          {e.empId},{e.empName},{e.empSalary}
                     </li>
                 )
      }
    </ul>
  );

}
export default ListEmp;