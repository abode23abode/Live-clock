import React, { useState } from "react";

function App(props) {

const [time,updateTime]=useState(props.h+":"+props.min+":"+props.sec)

 function Update(){
  updateTime( new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds())
 }
 
 {setInterval(Update,1000)}

  return (
    <div className="container">
      <h1>{time}</h1>
      
      <button onClick={Update}>Get Time</button>
    </div>
  );
}

export default App;
