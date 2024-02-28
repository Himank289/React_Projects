
function Condition1(props)
{

    return <h1>{props.esal} is greater than 5000</h1>
}

function Condition2(props)
{
   return <h1>{props.esal} is not greater than 5000</h1>
}
function Emp11(props)
{
    let e = {empid:props.id,
        empname:props.name,
        empsal:props.salary};


       
        if(e.empsal>5000)
        {
          return <Condition1 esal={e.empsal}/>;
        }   
        else
        {
            return <Condition2 esal={e.empsal}/>
        }   
            
            
        

}

export default Emp11;