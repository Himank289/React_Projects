
function Myemp(props)
{

    return(
        <li>{props.empname}</li>
    );
}
function Emparr1()
{


    let emparr = [{empid:1,ename:'nama',esal:5000},
                  {empid:2,ename:'nisha',esal:4000},
                  {empid:3,ename:'ram',esal:6000}];



    return(

        <>
        <ul>
          {

             emparr.map(e=><Myemp key={e.empid} empname={e.ename} />)
          }
        </ul>
        
        </>
    );

}

export default Emparr1;