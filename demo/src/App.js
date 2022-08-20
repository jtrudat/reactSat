import { useState } from 'react'
import { Input } from './components/Input'

export let App = ()=>{
let [word, setWord] = useState('the passed up word')
let onPassHandler = (passUp)=>{
  setWord(passUp)
}
  return(
    <div>
      
      <Input onPass={onPassHandler}></Input>
      {word}
      </div>
  )
}

