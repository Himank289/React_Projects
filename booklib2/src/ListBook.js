
import { BookContext } from "./App";
import { useContext } from "react";

function ShowBook(props)
{
  let book = props.book;
  return(
    <li>
       {book.bookid+' , '}
       {book.bookname+' , '}
       {book.bookauthor}
    </li>
  );
}

function ListBook(props)
{
  const {booklst} = useContext(BookContext);
  return(
    <ul>
      {booklst.map(b=><ShowBook  key={b.bookid} book={b}/>) }
    </ul>
  );

}
export default ListBook;