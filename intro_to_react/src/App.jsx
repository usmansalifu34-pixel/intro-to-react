import { useState } from 'react'
import './App.css'
const Card = ({name,age,gender})=>{
  const [currentAge,setAge] = useState(age)
  return (<div className='box'>
  <h2>{name}</h2>
  <h3>{currentAge}</h3>
  <h3>{currentAge >=18? "You are an adult" : "You are a minor"}</h3>
  <h4>{gender}</h4>
  <button onClick={()=>setAge(currentAge + 1)}>Age</button>
  
  </div>)
}
const App = ()=>{
  
  return(
  <div >
  <Card name="Usman" age = {10} gender = "male"/>
  <h2 style={{backgroundColor:'gray',border:"2px solid white",borderRadius:"10px",padding:"10px"}}>
    Functional arrow component </h2>
  <Card name="John" age = {90} gender = "male"/>
  </div>
)
}

export default App
