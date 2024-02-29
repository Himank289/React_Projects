import { useState } from "react";


function MyBookForm(props)
{
        const [mybook,setmybook]=useState({bkid:props.bkid,bkname:props.bkname,bkprice:props.bkprice});

        const handlesubmit=(event)=>{
            event.preventDefault();
            console.log(mybook);
            //fire the parent listbook component's output event - and passes mybook to it.
            //child to parent communication
            props.opevt_addbook(mybook);
        }
        return(
            <>
            <form onSubmit={handlesubmit}>
        <label>mybookid:
         <input
             type="number"
             value={mybook.bkid}
             onChange={(e) => setmybook({...mybook,bkid:e.target.value})}
         />
        </label> <br/>
        <label>mybookname:
         <input
             type="text"
             value={mybook.bkname}
             onChange={(e) => setmybook({...mybook,bkname:e.target.value})}
         
         />
        </label> <br/>
        <label>mybookprice:
         <input
             type="number"
             value={mybook.bkprice}
             onChange={(e) => setmybook({...mybook,bkprice:e.target.value})}
         />
        </label><br/>
        <input type='submit' />
    </form>
    <hr></hr>
    <p>{mybook.bkid},{mybook.bkname},{mybook.bkprice}</p>
            </>

        );
}

export default MyBookForm;