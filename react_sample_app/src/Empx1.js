function Empx1(props)
{
    let e = {empid:props.id,
        empname:props.name,
        empsal:props.salary};


         return(
            <>            
              {e.empsal>5000 ?
                <h1>{e.empsal} is greater than 5000</h1>:
                <h1>{e.empsal} is not greater than 5000</h1>};
            
            </>
            );

        

}

export default Empx1;