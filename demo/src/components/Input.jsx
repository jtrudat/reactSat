import { useState } from 'react'

export let Input = (props)=>{
let [dataEntry, setDataEntry] = useState('')
    let onChangeHandler = (evt)=>{
        setDataEntry(evt.target.value)
        console.log(evt.target.value)
        console.log(dataEntry)
        
}

let submitHandler = (evt)=>{
    evt.preventDefault()
    props.onChangeUp(dataEntry)
    setDataEntry('')
}

let clear = ()=>{
    setDataEntry('')
}
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={onChangeHandler} placeholder='info' value={dataEntry}></input>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={clear}>Clear</button>
        </div>
    )
}