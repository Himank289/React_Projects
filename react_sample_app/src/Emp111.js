
function Condition1(props)
{

    return <h1>{props.esal} is greater than 5000</h1>
}

function Condition2(props)
{
   return <h1>{props.esal} is not greater than 5000</h1>
}
function Emp111(props)
{
    let e = {empid:props.id,
        empname:props.name,
        empsal:props.salary};

      let result;
       
        if(e.empsal>5000)
        {
          result = <Condition1 esal={e.empsal}/>;
        }   
        else
        {
            result = <Condition2 esal={e.empsal}/>
        }   

        return(
            <div>
                {result}
            </div>
        );

            

}

export default Emp111;