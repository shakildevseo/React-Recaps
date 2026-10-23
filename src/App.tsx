
import './App.css'


// using  props
function Greeting(props) {
  return (
    <>
    <h2>Hello, {props.name}!</h2>
    
    </>
  )
}





function App() {

  return (
    <>

 <Greeting  name="Md Shakil Hossain"/>
 <Greeting  name="Md Shakib Hossain"/>

    </>
  )
}



export default App
