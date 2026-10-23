
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

  return (
    <>
    <h2>Welcome to the Developer Zone!</h2>
      <Developer  name="Md Shakil Hossain" /> 
      <Developer name={'Shakib Hassan'} />

    </>
  )
}



export default App
