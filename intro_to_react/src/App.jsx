import { useState } from 'react'
import './App.css'
const Card = ({name,age,gender})=>{
  return (<div className='box'>
  <h2>{name}</h2>
  <h3>{age}</h3>
  <h4>{gender}</h4>
  <button onClick={()=>setIsAdult(true)}>Age</button>
  </div>)
}
const App = ()=>{
  const [isAdult,setIsAdult] = useState(false)
  return(
  <div >
  <Card name="Usman" age = {5} gender = "male"/>
  <h2 style={{backgroundColor:'gray',border:"2px solid white",borderRadius:"10px",padding:"10px"}}>Functional arrow component</h2>
  <Card name="John" age = {9} gender = "male"/>
  </div>
)
}

export default App
