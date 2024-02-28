

function Car(props)
{
    return(
    <li>{props.brandname}</li>
    );
}

function CarList(props)
{
    const carlist = ['Santro','Hondacity','Jazz','Ecosport'];


    return(
      <ul>
        {
            carlist.map(c => <Car brandname={c} />) 
        }
      </ul>      
    );

}

export default CarList;