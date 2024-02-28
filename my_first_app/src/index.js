import React from 'react';
import ReactDOM from 'react-dom/client';



function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


const myfirstelement = <h1>Hello React!</h1>

//JSX allows to write html tags inside Javascript code
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);



//root.render(myfirstelement);

root.render(myelement);
/*
root.render(
   <Hello/>
);

*/