import React,{useState} from 'react'

const withAmount =(components) =>(
    function Amount(){   
        const[amount, setAmount] =useState(100)
        return(
            <>
                <div>Amount is {amount} dollars</div>
                { 
                    components.map(Component=>(
                        <Component amount={amount} />
                    )
                )}
            </>
            
        )
    }
)

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

const Currencies =withAmount([Euros, Pounds])

export default Currencies