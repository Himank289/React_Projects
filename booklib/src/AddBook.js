
import {BookContext} from './App';
import {useState,useContext} from 'react';

function AddBook()
{  const[bid,setBid] =  useState(3);
   const [bname,setBname] = useState("Learn Spring Boot");
   const[bauthor,setBauthor] =  useState("Mona");
  
   const {addBook} = useContext(BookContext);

   const handleSubmit = (event)=>   
    {
        event.preventDefault();
        alert(bid+','+bname+','+bauthor); 
        addBook({bookid:bid,bookname:bname,bookauthor:bauthor});

        //set all textboxes to blank
        setBid(bid+1);
        setBname('');
        setBauthor('');

    }

    return(

        <form onSubmit={handleSubmit}>
            <label>
                bookid:
                <input type='text'  
                   value={bid}
                   onChange={e=>{ setBid(e.target.value); }}
            />
                            
            </label>
            <label>
                bookname:
                <input type="text" value={bname} 
                            onChange={(event)=>setBname(event.target.value)} />
             
            </label>
            <label>
                bookauthor:
                <input type="text" value={bauthor} 
                            onChange={(event)=>setBauthor(event.target.value)} />
             
            </label>
            <input type="submit" />        
        </form>
    );
}

export default AddBook;