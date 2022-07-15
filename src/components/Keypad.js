// Code Keypad Component Here
import React from "react"

function Keypad (){
    function yes(){
console.log("Entering password...")
    }
    return(
        <input type="password" onChange ={yes}></input>
        
    )
}
export default Keypad;
