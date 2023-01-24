import React, {useState} from 'react'

export default function RenderPropPattern() {
  return (
    <div>
        <h2>Children as a function</h2>
        <AmountChildren>         
             {(amount)=>(
                <>
                <h3>--Amount Children--</h3>
                <Euros amount={amount} />
                <Pounds amount={amount} />
                </>   
            )}            
        </AmountChildren>
        <AmountRender 
            render={(amount) =>(
                <>
                <h3>--Amount Render--</h3>
                <Euros amount={amount} />
                <Pounds amount={amount} />
                </>  
            )}
        />
    </div>
  )
}

const AmountChildren =(props)=>{
    const[amount, setAmount] =useState(90)
    return (
        <div>
            <p>Amount is {amount} dollars</p>
            {props.children(amount)}
        </div>       
    )
}

const AmountRender =(props)=>{
    const[amount, setAmount] =useState(90)
    return (
        <div>
            {/* <p>Amount is {amount} dollars</p> */}
            {props.render(amount)}
        </div>       
    )
}

const Euros =({amount}) =>{
    return(
        <div>
            <p>Amount is {amount*1.02} euros</p>
        </div>
    )
}

const Pounds =({amount}) =>{
    return(
        <div>
            <p>Amount is {amount*1.08} pounds</p>
        </div>
    )
}