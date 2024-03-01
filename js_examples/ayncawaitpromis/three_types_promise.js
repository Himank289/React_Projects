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

function calldelbook()
{
    delbook()
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

}

calldelbook();

