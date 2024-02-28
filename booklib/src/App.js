import './App.css';
import {createContext,useState,useContext} from 'react';
import AddBook from './AddBook';
import ListBook from './ListBook';


const BookContext = createContext();    
export {BookContext};    

const bookarr =[
                {bookid:1,bookname:'Learn Java',bookauthor:'abc'},
                {bookid:2,bookname:'Learn React',bookauthor:'bbb'}    
               ];



function App() {

     const [booklst,setBookLst] = useState(bookarr);
   

    const addBook = (b) =>
    {
        console.log('add book called'+b.bookid);
         
        setBookLst((prev)=>
        {  console.log('prev arr length'+prev.length)
            let arr = [...prev,b];
            return arr;
        });
     
     }
      

    return (
   <BookContext.Provider value={{booklst,addBook}}>
      <section>
        <p>Total no of books : {booklst.length} </p>
      </section>
      <section>       
         <AddBook />
      </section>
      <section>
        <ListBook />
      </section>
   </BookContext.Provider>
  );

}




export default App;
