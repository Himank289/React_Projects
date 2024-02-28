function Empx(props)
{
    let e = {empid:props.id,
        empname:props.name,
        empsal:props.salary};


         return(
            <>
          
            {e.empsal<5000 && <h1>{e.empsal} is less than 5000</h1>}
            {e.empsal>5000 && <h1>{e.empsal} is greater than 5000</h1>}
            </>
            );
            
            
        

}

export default Empx;