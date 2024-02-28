
import { useState } from "react";



function Book(props) {

    const [bkid, setbkid] = useState(props.bkid);
    const [bkname, setbkname] = useState(props.bkname);
    const [bkprice, setbkprice] = useState(props.bkprice);

    const myElement = <h1>I Love JSX!</h1>; //it is jsx htmlis mixed with js (we are not giving it as string)
    // it's JSX 
    const data = <div>
        <p>Book Details</p>
        {bkid} <br></br>
        {bkname} <br></br>
        {bkprice} <br></br>
    </div>;

    const func = (id) => {
        // bkid=id //react will not re-render it we should use usestate hook in order to render the changed property
        setbkid(id);
    }

    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
     }
    const myElement1 = <h1>{text}</h1>;
    

    return (

        <div>
            {/* {data} */}
            <div>
                <p>Book Details</p>
                {bkid} <br></br>
                {bkname} <br></br>
                {bkprice} <br></br>
            </div>
            <button onClick={() => { func(2); setbkname('ila'); setbkprice(200); }}>Click for setting State </button>
            <hr />
            {myElement}
            {myElement1}

        </div>
    );
}

export default Book;