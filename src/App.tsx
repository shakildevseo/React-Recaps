
import './App.css'

  function User({name}){
    return(
      <>
      <h2>{name}</h2>
      </>
    )
  }



function App() {
const username= "Md Shakil Hossain"


  return (
    <>
 
   <User  name={'username'}/>
   <User  name="username"/>
   <User  name={username}/>

    </>
  )
}



export default App
