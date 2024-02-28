function Emp1(props)
{
    let e = {empid:props.id,
        empname:props.name,
        empsal:props.salary};


       
        if(e.empsal>5000)
        {
          return <h1>{e.empsal} is greater than 5000</h1>;
        }   
        else
        {
            return <h1>{e.empsal} is not greater than 5000</h1>
        }   
            
            
        

}

export default Emp1;