import MyBookForm from "./mybookform";
import { useState } from "react";

function ListMyBook(){

    const[mybkarr,setmybkarr]=useState([{bkid:1,bkname:'React',bkprice:5000}]);

    const addmybook=(mybook)=>{
        console.log('inside list book addmy book function');
        console.log(mybook);
        setmybkarr([...mybkarr,mybook]);
    }

    return(
        <>
        <MyBookForm 
        opevt_addbook={(mybook)=>{addmybook(mybook)}}
         bkid='2' bkname='Angular' bkprice='3000'></MyBookForm>

        <hr/>
        <p>Total Books :{mybkarr.length}</p>
        <ul>
           {mybkarr.map((b)=><li key={b.bkid}>{b.bkid},{b.bkname},{b.bkprice}</li>)}
        </ul>
        
        
        
        
        
        </>



    );

}


export default ListMyBook;