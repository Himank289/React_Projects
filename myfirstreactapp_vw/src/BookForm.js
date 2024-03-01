import { useState } from "react";
 
function ShowBook(props)
{
    return(
            <li>
              {props.bkid}<br/>
              {props.bkname}<br/>
              {props.bkprice}<br/>
            </li>
          );
}
 
function BookForm(props)
{
   
   const [bkid,setbkid] = useState(props.bkid);
   const [bkname,setbkname] = useState(props.bkname);
 
   const [bkprice,setbkprice] = useState(props.bkprice);
   const [bkarr,setbkarr]=useState([{'bkid':1,'bkname':'Learn Angular','bkprice':500}]);
 
   
 
 
   const addbook = (event)=>{
        event.preventDefault();
        alert('book added...');
        console.log(bkid+","+bkname+","+bkprice);
        alert(bkid+","+bkname+","+bkprice);
        //you will create a new Book(bkid,bkname,bkprice) and then using bookservice.addbook() you will add new book to service
        setbkarr([...bkarr,{'bkid':bkid,'bkname':bkname,'bkprice':bkprice}]);
    }
 
     
    return(
       
    <div>
    <form onSubmit={addbook}>
        <label>bookid:
         <input
             type="number"
             value={bkid}
             onChange={(e) => setbkid(e.target.value)}
         />
        </label> <br/>
        <label>bookname:
         <input
             type="text"
             value={bkname}
             onChange={(e) => setbkname(e.target.value)}
         
         />
        </label> <br/>
        <label>bookprice:
         <input
             type="number"
             value={bkprice}
             onChange={(e) => setbkprice(e.target.value)}
         />
        </label><br/>
        <input type='submit' />
    </form>
    <hr/>  
   
        <div>
           <p>Book details!</p>
            {bkid}<br/>
            {bkname}<br/>
            {bkprice}<br/>
        </div>
    <hr/>
    <h1>List of Books</h1>
        <ul>
           {bkarr.map(b=> <ShowBook key={b.bkid} bkid={b.bkid} bkname={b.bkname} bkprice={b.bkprice} />)}
           
        </ul>
    </div>
    );
}
 
 
export default BookForm;