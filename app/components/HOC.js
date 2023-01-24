import React, {useState} from "react"

const getRandom =()=>{
    const d =[null, [], [{id:1, name: 'Ivan'}, {id:2, name: 'Pete'}]]
    return d[ Math.floor(Math.random()*(2+1))]
}

const withHOC =(Component, {noData,dataEmpty,loading}={noData:'', dataEmpty:'', loading:''}) =>{
    return (props) =>{
        if(props.loading){
            return <div>{loading || 'Loading list'}</div>
        }
        if(!props.data){
            return <div>{noData || 'No data yet'}</div>
        }
        if(props.data.length ==0){
            return <div>{dataEmpty || 'Data is empty'}</div>
        }
        return <Component {...props} />
    }
}

const BaseList =(props)=>{
    return(
        <ul>
            {props.data.map(item =>(
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

const DisplayData =() =>{
    const[data, setData] =useState(getRandom())
    const[loading,setLoading] =useState(false)
    // const fetchData =getRandom()
    return (
        <>
            <h2>Higher Order Component</h2>
            <ListData data={data} loading={loading} />
            <br></br>
            <button onClick={()=>setData(getRandom())}>Fetch Data</button>
        </> 
    )
}

const ListData =withHOC(BaseList,{
    noData:'NO DATA',
    dataEmpty: 'DATA is EMPTY',
    loading: 'Loading...'
})

export default DisplayData