import { useState } from "react";

function MyTraining(props)
{

    const [course,setCourse] = useState("React Training");
    const [facultyname,setFacultyName] =  useState(props.facultyname)

    const chngTraining = ()=>{
        console.log('inside callback function chngTraining');
        setCourse('Jquery Training');
    }

    const chngTraining1 = (coursename)=>{
       console.log('inside callback function chngTraining1, coursename='+coursename);
         setCourse(coursename);
     }

    return(
        <>
        <p> My Training name is {course}</p>
        <p> Faculty name is {facultyname}</p>

        
        <button onClick={chngTraining}>Change Training</button>
        <button onClick={()=>{chngTraining1('NodeJS Training')}}>Change Training</button>
        <button onClick={()=>{setCourse('Angular Training')}}>Change Training1</button>

        <button onClick={()=>{setFacultyName('XYZ')}}>Change Faculty</button>
        </>
    );

}

export default MyTraining;