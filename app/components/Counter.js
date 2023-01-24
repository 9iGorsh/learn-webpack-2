import React, {useEffect, useState} from "react";
import { useInterval } from "../utils/useInterval";

const Counter =()=>{
    let[count, setCount] =useState(0)
    const[delay,setDelay] =useState(1000)
    const[entered, setEntered] =useState()

    useInterval( () =>{
        setCount(count+1)
    },delay)

    return(
        <div>
            <h3>The count is {count}</h3>
            <input type='text'
                value={entered}
                onChange={(e)=>setEntered(e.target.value)}
            ></input>
            <button onClick={()=>setDelay(entered)}>set Delay</button>   
        </div>
    )
}

export default Counter