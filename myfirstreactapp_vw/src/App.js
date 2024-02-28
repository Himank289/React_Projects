import './App.css'
import Book from './Book';
import Largest from './Largest';
import Listnos from './Listnos';
import ListBooks from './ListBooks';

function App(props) {
  let myname="himank";
  let myname1=props.name;
  const no1=10;
  const no2=props.no2;
//props.name='fff'; props are read only properties used to iniialise the component only 

  const changename=(n)=>{
    myname=n;    //tryig to change state of your app component
    // alert(myname);
  }

  //mention properties and methods here
  return (
    
        <div className="myclass">

          
            <p>
              let's learn react ! <br></br>
              {myname}<br></br>
              {myname1}<br></br>
              {props.surname}
              {changename('sumit')}
            </p>
           <Book bkid='1' bkname='Learn Angular' bkprice='200'/>
           <Largest no1={no1} no2={no2} no3='30'/>
           <Listnos></Listnos>
           <ListBooks></ListBooks>
        </div>
  );
}

export default App;
