import { useState,useEffect } from "react";
 
 function SessionStorage()
 {
 // React State
 const [count, setCount] = useState(0);
 
 useEffect(() => {
   // Access count value from session storage
   var pageView = sessionStorage.getItem("pageView");
   if (pageView == null) {
     // Initialize page views count
     pageView = 1;
   } else {
     // Increment count
     pageView = Number(pageView) + 1;
   }
   // Update session storage
   sessionStorage.setItem("pageView", pageView);
   setCount(pageView);
 }, []); //No dependency to trigger in each page load
 
 return (
   <div className="app">
     <div>Page View Count is:</div>
     {count}
   </div>
 );
}
 
export default SessionStorage;