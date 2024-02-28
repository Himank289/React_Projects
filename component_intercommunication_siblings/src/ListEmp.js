import  {useEffect, useState} from 'react';
function ListEmp(props)
{

    const  [emplst,setEmplst] =useState(props.emparr);

   
    //called everytime ListEmp component is rendered or re-rendered
    useEffect(()=>{

        console.log('ListEmp component rendered..');
        console.log('emplst...');
        console.log(emplst)
        console.log('props.emparr =');
        console.log(props.emparr);
      
        //u have to call setEmplst so that changed properties can be set/copied again to emplst 
        setEmplst(props.emparr);
    })
    
    return(
        
     <div>
     
      <ul>
      {

         emplst.map(e=><li key={e.empid}>{e.empid},{e.empname},{e.empsal}</li>)
      }
    </ul>
    </div>
    );

}
export default ListEmp;