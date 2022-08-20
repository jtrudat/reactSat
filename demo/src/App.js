import {Input} from './components/Input'
import { useState } from 'react'

function App() {
  let [word, setWord] = useState('the passed up word')
  let onNewWord = (term)=>{
    setWord(term)
  } 
  return (
    <div>
      <Input onSwitch = {onNewWord}></Input>
      {word}
    </div>
  );
}

export default App;
