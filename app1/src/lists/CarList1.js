

function Car1(props)
{
    return(
    <li>{props.brandname}</li>
    );
}

function CarList1(props)
{
    const carlist = [
                     {id:1,name:'Santro'},
                     {id:2,name:'Hondacity'},
                     {id:3,name:'Jazz'},
                     {id:4,name:'Ecosport'}
                    ];


    return(
      <ul>
        {
            carlist.map(c => <Car1 key={c.id} brandname={c.name} />) 
        }
      </ul>      
    );

}

export default CarList1;