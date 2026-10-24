
import './App.css'
import ButtonComponent from './compponents/ButtonComponent'








  function handleClick() : void{
    console.log("Clicked")
  }


function App() {



  return (

    <>

    <ButtonComponent onClick={handleClick}  />

    </>

  )


}






export default App
