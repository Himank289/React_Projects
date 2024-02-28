
function Book(props) {

  if(props.book)
  {

    return(
        <div>
            <p>{props.book.bookid}</p>
            <p>{props.book.bookname}</p>
            <p>{props.book.bookauthor}</p>
        </div>
    );
  }
  else
  {
     return(
        <div>Book is empty</div>
     );
  }
}

export default Book;