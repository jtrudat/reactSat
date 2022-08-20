import { useState } from 'react'

export let Input = (props)=>{
let [data, setData] = useState('')    


let onChangeValue = (evt)=>{
    
    setData(evt.target.value)
    console.log(evt.target.value)
}
let clear = ()=>{
    setData('')
}
let sendUp = (evt)=>{
    evt.preventDefault()
    props.onPass(data)
    setData('')
}
        return(
            <div>
                <form onSubmit={sendUp}>
                <input  onChange={onChangeValue} placeholder='information' value={data}></input>
                <button type='submit'>submit up</button>
                </form>
                <button onClick={clear}>clear</button>
                
            </div>
        )
}