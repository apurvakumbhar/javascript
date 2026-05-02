import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//syntax
const element = <h1>Hello React</h1>
function student() {
  return <h1>This is functional component.</h1>
  
}
//use of component
function app(){
  return<>
  <student/>
        </>
}
