import {BookContext} from './App';
import {useState,useContext} from 'react';

function ShowBook(props)
{
  return(
    <li>
       {props.book.bookid+' , '}
       {props.book.bookname+' , '}
       {props.book.bookauthor}
    </li>
  );
}

function ListBook()
{
  const {booklst} = useContext(BookContext);

  return(
    <ul>
      {booklst.map(b=><ShowBook  key={b.bookid} book={b}/>) }
    </ul>
  );

}
export default ListBook;