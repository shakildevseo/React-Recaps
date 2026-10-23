
import './App.css'

function Developer({ name }) {
  return (
    <>

      <ul>
        <li>{name}</li>
      </ul>
    </>

  )
}



function App() {

  const name = "Md Shakil Hossain";
  const age = 20

  return (
    <>
    <h2>Welcome to the Developer Zone!</h2>
      <Developer  name={name}  /> 


    </>
  )
}



export default App
