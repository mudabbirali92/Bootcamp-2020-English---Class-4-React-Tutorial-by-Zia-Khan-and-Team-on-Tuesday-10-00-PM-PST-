//import React from 'react';
import React, { useState } from 'react';
import './coloring.css';

function Home(val) {
  // const state = React.useState(true);
  // const isLit = state[0];// this will be returning a value
  // const setLit = state[1];// this will be returning a function

  // console.log("Current state is ",isLit, setLit);

  // ABOVE STATEMENT CAN BE WRITTEN AS

  // const [litValue,litFunction]=React.useState(true);
  // console.log("Current state is ",litValue, litFunction);

  // ABOVE STATEMENT CAN BE WRITTEN WITH DESTRUCTURING FORMAT BUT FOR THAT YOU WILL NEED ANOTHER 
  // LIBRARY CALLED  import React, {useState} from 'react';
  
  let [listVal,litFunc]=useState(false);
  let [times,setTimes]=useState(0);
  //let [isColor,setColor]=useState(false);
  //console.log("Current state is ",listVal, litFunc);
  
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////// Now Accessing that value /////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  // if ( listVal==true)
  // {
  //   return "Room is Lit"
  // }
  // else
  // {
  //   return "Room is Dark"
  // }

  // OR
  // You can alternatevely do the same task with single line of code as under


  // return <div>
  //   Room is {listVal? "Lit":"Dark"}
  //   <br/>
    
  //   </div>
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Now Accessing with Button ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
function toggling()
{

  console.log("Now condition of light is ",listVal);
  setTimes(++times);
  litFunc(!listVal);

}



return <div className={listVal? "room lit":"room dark"}>

  <center><h1>Created by Mudabbir Ali <strong>Gorillaz</strong></h1></center>
  <br/>
  <br/>
  <center>
Room is <strong>{listVal ? "Lit" : "Dark"}</strong>

<br/>

Turns <strong>{times}</strong>
<br/>
<button onClick={toggling}>SWITCH</button>
<br/>

</center>
</div>
  
// one thing need to be noticed here that we cant directly  access value of listVal but need to
// access it with some condition
  
}

export default Home;
