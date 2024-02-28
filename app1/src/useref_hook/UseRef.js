import {useRef} from "react";


function UseRefInForm(props) {

    const inputEle = useRef();

    const handleChange = (event) => {
       
        //inputEle.current is reference to HtmlInputElement
        console.log(inputEle.current.value);
          alert(`entered text value is ${inputEle.current.value}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The final input value you entered is: ${inputEle.current.value}`);
        inputEle.current.focus();
    }


    return (
        <form  onSubmit={handleSubmit}>
        <input  type="Text" value={'Namrata'}  ref={inputEle} onChange={handleChange}/>
        <input type="submit" />
        </form>
    );
}

export default UseRefInForm;
