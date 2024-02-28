import { useEffect,useState } from "react";
import axios from 'axios';

//https://dev.to/hey_yogini/usereducer-instead-of-usestate-while-calling-apis-3e1l

function ListEmp(props)
{

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [emparr,setEmparr] = useState([]);
    
    useEffect(()=>{

        console.log('listallemps called');
        const url = 'http://localhost:8085/';
        setLoading(true);
        const getEmps = async ()=>{
        
        let response = await axios.get(url+'emps')
        if (response.status == 200) {
            setEmparr(response.data);
            setError(false);
            return;
        }
        setError(response.error);
        };
        getEmps();
        setLoading(false);
       
    },[]);
   
 
   

    return(
        <div className="container">
        {loading ? (
            <p>loading...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <table  className='table table-striped'>
                <thead>
                <tr>
                    <th>{'Empid'}</th>
                    <th>{'Empname'}</th>
                    <th>{'Empsalary'}</th>
                </tr>
                </thead>
                <tbody>
                {emparr.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empSalary}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
    </div>


    );

}

export default ListEmp;