import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'

export let App = ()=>{
let [passUp, setPassUp] = useState('waiting for pass up function')

let changeHandler = (newValue)=>{
  setPassUp(newValue)
}

  return(
    <div className="App">
      <Input onChangeUp={changeHandler}></Input>
      {passUp}
    </div>
  )
}
