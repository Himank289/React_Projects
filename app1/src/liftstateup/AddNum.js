/*
import { useState } from "react";
function ShowSum(props)
{
   // console.log(props);
    return(
       <div>
         {props.total > 0 && <p>Total is {props.total} ! </p> }
       </div>
        
    );
}

function MyForm(props)
{
    console.log(props);
    const [num1,setNum1] = useState(props.num1);
    const [num2,setNum2] = useState(props.num2);

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(num1);
        console.log(num2);
        props.outputNumEvt(num1,num2);
    }
    return(
        <form onSubmit={handleSubmit} >
           <label>  
            Num1:          
            <input type='Number' 
                   value={num1} 
                   onChange={ event =>setNum1(event.target.value)}
            />
            </label>
            <label>  
            Num2:          
            <input type='Number' 
                   value={num2} 
                   onChange={ event =>setNum2(event.target.value)}
            />
            </label>
            <input type="submit" />

        </form>
    );

}
function AddNum(props)
{
    const [sum,setSum] = useState(0);

    const handleOutputNumEvt = (num1,num2)=> {
       const n1 = parseInt(num1);
       const n2 = parseInt(num2);
       const r = n1+n2;
        console.log(r);
        setSum(r);
      
    }

    return(
        <div>
            <MyForm 
             num1={props.num1} 
             num2={props.num2}
             outputNumEvt = {handleOutputNumEvt}>
             </MyForm>
            <ShowSum total={sum}/>
        </div>
    );

}
*/
import React from "react";

class ShowSum extends React.Component {

    constructor(props)
    {
        super(props);
    }
    render() {
        let total = this.props.total;

        return(
            <div>
                { total>0 && <p>The total is {total}!</p>}
            </div>
        );

    }
}

class MyForm extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { num1:this.props.num1, num2:this.props.num2};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setNum1 =  this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.outputNumEvt(this.state.num1,this.state.num2);

    }
    setNum1= (event) =>
    {
       
      //  this.setState({ num1:event.target.value});
         this.setState((ps)=>{
            console.log(ps.num1) //previous state value
            return {
            ...ps,
            num1:event.target.value
           }
        });
    }

    setNum2 = (event) =>
    {
       
        this.setState({ num2:event.target.value});
          
    }
    
    render() {
 

        return(
        <form onSubmit={this.handleSubmit} >
           <label>  
            Num1:          
            <input type='Number' 
                   value={this.state.num1} 
                   onChange={this.setNum1}
            />
            </label>
            <label>  
            Num2:          
            <input type='Number' 
                   value={this.state.num2} 
                   onChange={this.setNum2}
            />
            </label>
            <input type="submit" />

        </form>
        );

    }
}

class AddNum extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {sum:0};
        this.handleOutputNumEvt =  this.handleOutputNumEvt.bind(this);

    }

    handleOutputNumEvt = (num1,num2) => {
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        const r = n1+n2;
         console.log(r);
         this.setState({sum:r});

    }

   render() {
    return(
        <div>
            <MyForm 
             num1={this.props.num1} 
             num2={this.props.num2}
             outputNumEvt = {this.handleOutputNumEvt}>
             </MyForm>
            <ShowSum total={this.state.sum}/>
        </div>
    );
   }
}

export default AddNum;