import { useState } from 'react'

export let Input = (props)=>{
    const [userName, setUserName] = useState('')

    const handleChange = (evt)=>{
        setUserName(evt.target.value)
    }
    const handleSubmit =  (e)=>{
        e.preventDefault()
        props.onSwitch(userName)
        setUserName('')
        

        // const response = await fetch('https://api.github.com/users/${userName}')
        // const data = await response.json()
        // console.log(data)
    }
    let clear = ()=>{
        setUserName('')
    }
    return(
        <div>
            {userName}
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder='information' value={userName}>
                </input>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={clear}>clear data</button>
        </div>
    )
}