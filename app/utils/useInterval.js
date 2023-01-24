import { useEffect, useRef } from "react";

export const useInterval =(callback, delay)=>{
    const callbackRef =useRef()

    useEffect(()=>{
        callbackRef.current =callback
    },[callback])
    
    useEffect(()=>{
        let unmount =false
        let id
        if(!unmount){
            id=setInterval(()=>{
            callbackRef.current()
            }, delay);
        }

        return ()=>{
            unmount =true
            clearInterval(id)
        }    
    },[delay])
}