function Emparr()
{


    let emparr = [{empid:1,ename:'nama',esal:5000},
                  {empid:2,ename:'nisha',esal:4000},
                  {empid:3,ename:'ram',esal:6000}];



    return(

        <>
        <ul>
          {

             emparr.map(e=><li key={e.empid}>{e.empid},{e.ename},{e.esal}</li>)
          }
        </ul>
        
        </>
    );

}

export default Emparr;