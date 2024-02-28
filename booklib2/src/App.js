//https://www.freecodecamp.org/news/state-management-with-react-hooks/

import './App.css';
import AddBook from './AddBook';
import ListBook from './ListBook';
import { createContext, useReducer } from 'react';
import bookdao from './BookService';

const BookContext = createContext();
export {BookContext};

function App() {
  
const bookarr =[
  {bookid:1,bookname:'Learn Java',bookauthor:'abc'},
  {bookid:2,bookname:'Learn React',bookauthor:'bbb'}    
 ];

const [booklst,dispatch] =  useReducer(bookdao,bookarr);

const addBook = (b)=>
{
    dispatch({type:'ADD',newbook:b});
}
 
  return (

    <BookContext.Provider value={{booklst,addBook}}>
       <AddBook/>
       <ListBook/>
    </BookContext.Provider>
  

  );
}

export default App;
