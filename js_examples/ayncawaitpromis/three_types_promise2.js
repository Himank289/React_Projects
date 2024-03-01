// function func(){
//     new Promise(resolve=>{
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);

//     })
//     .then((response)=>{console.log(response)})
//     .catch((eror)=>{console.log(eror)})
//     .finally(()=>{console.log('promise is completed')});
// }
// func();




function delbook(){

return fetch('http://localhost:5000/books/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
});
}

async function calldelbook()
{
    try{
        const response=await delbook();
        console.log(response);
    }
    catch(error){
        console.log('inside catch block');
        console.log(erorr);
    }
   
}

calldelbook();

