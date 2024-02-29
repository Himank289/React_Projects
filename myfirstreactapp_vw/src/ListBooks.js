import { books } from "./data";

function ShowBook(props){

    return(
      <li>
        {props.bkid}<br/>
        {props.bkname}<br/>
        {props.bkprice}<br/>
        </li>

    );
}



function ListBooks(){
    let books1=books;

    return(

        <>
        <h1>List of Books</h1>
      <ul>
        {books1.map(b=><ShowBook key={b.bkid} bkid={b.bkid} bkname={b.bkname} bkprice={b.bkprice}/> )}
      </ul>
        
        
        </>
    );
}

export default ListBooks;