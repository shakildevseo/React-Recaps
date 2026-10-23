
import './App.css'

  function User({userInfo : {name, email, age}}){
    // const {name, age, email} = userinfo;
    return(
      <>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{age}</h2>
      </>
    )
  }



function App() {


  return (
    <>
 
     <User userInfo={{
      name : "Md Shakil",
      age : 20,
      email : "shakiltest@gmail.com"
     }}/>

    </>
  )
}



export default App
