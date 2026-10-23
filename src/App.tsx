
import './App.css'


// Without props object destructuring 
function User(props) {
  return (
    <>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
    <p>{props.age}</p>
    
    </>
  )
}





function App() {

  return (
    <>

 <User  name="Md Shakil Hossain" email="shakiltest@gmail.com" age={20}/>

    </>
  )
}



export default App
