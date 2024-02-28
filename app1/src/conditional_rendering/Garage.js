
function Garage(props)
{
   const car = props.car;
    return(

        <>
        <h3>Garage</h3>
        {
           car.length > 0  &&  <p> There are {car.length} cars in my Garage</p>
        }
        </>
    );
}

export default Garage;