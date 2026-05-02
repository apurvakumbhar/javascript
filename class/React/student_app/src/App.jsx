import { useState } from 'react'
import Student_info from './student_info'  
import counter from './counter' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <Student_info fname="Apurva" age="22" course="AIML" />
      <counter/>
    </>
  );
}

export default App