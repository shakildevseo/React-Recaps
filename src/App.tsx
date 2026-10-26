
import './App.css'
import Button from './compponents/Button';
import Counter from './compponents/Counter'
import Greeting from './compponents/Greeting';



function App() {

  let count = 0;


  const handleIncrementCount = ()=>{
    console.log(count)
       return count + 1;
  }




   const handleSave = ()=>{
    alert("Button was clicked! Data saved.")
   }



  return (

    <>
  
  <Counter count= {count} increment={handleIncrementCount}/>
  <Greeting name="Rahim'" />
  <Greeting name="Karim'" />
  <Button text="Save Changes" onClick={handleSave}/>


    </>

  )


}






export default App
