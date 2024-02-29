import { useState } from "react";
 
function ShowBook1(props)
{
    return(
            <li>
              {props.bkid}<br/>
              {props.bkname}<br/>
              {props.bkprice}<br/>
            </li>
          );
}
 
function BookForm1(props)
{
   
   const [book,setbook] = useState({bkid:props.bkid,bkname:props.bkname,bkprice:props.bkprice});

   const [bkarr,setbkarr]=useState([{'bkid':1,'bkname':'Learn Angular','bkprice':500}]);
 
   
 
 
   const addbook = (event)=>{
        event.preventDefault();
        alert('book added...');
        console.log(book.bkid+","+book.bkname+","+book.bkprice);
        alert(book.bkid+","+book.bkname+","+book.bkprice);
        //you will create a new Book(bkid,bkname,bkprice) and then using bookservice.addbook() you will add new book to service
        setbkarr([...bkarr,{'bkid':book.bkid,'bkname':book.bkname,'bkprice':book.bkprice}]);
    }
 
     
    return(
       
    <div>
    <form onSubmit={addbook}>
        <label>bookid:
         <input
             type="number"
             value={book.bkid}
             onChange={(e) => setbook({...book,bkid:e.target.value})}
         />
        </label> <br/>
        <label>bookname:
         <input
             type="text"
             value={book.bkname}
             onChange={(e) => setbook({...book,bkname:e.target.value})}
         
         />
        </label> <br/>
        <label>bookprice:
         <input
             type="number"
             value={book.bkprice}
             onChange={(e) => setbook({...book,bkprice:e.target.value})}
         />
        </label><br/>
        <input type='submit' />
    </form>
    <hr/>  
   
        <div>
           <p>Book details!</p>
            {book.bkid}<br/>
            {book.bkname}<br/>
            {book.bkprice}<br/>
        </div>
    <hr/>
    <h1>List of Books</h1>
        <ul>
           {bkarr.map(b=> <ShowBook1 key={b.bkid} bkid={b.bkid} bkname={b.bkname} bkprice={b.bkprice} />)}
        </ul>
    </div>
    );
}
 
 
export default BookForm1;