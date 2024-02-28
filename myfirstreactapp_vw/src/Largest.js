

function Largest(props){

    let no1=props.no1;
    let no2=props.no2;
    let no3=props.no3;
    let result;
    if(no1>no2){
        if(no1>no3){
            result=<p>no1:{no1} is the Largest</p>
        }
        else
        {
            result=<p>no3:{no3} is Largest</p>
        }
    }
    else if(no2>no3){
        result=<p>no2:{no2} is largest</p>
    }


    return(
        <>
        
        {result}
        </>

    );
    }

export default Largest;