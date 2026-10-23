
import './App.css'


function FruitList({items}){
  const {} = items


  return (
    <>
    
    {
      items.skillList.map((items, index)=>(
        <li key={index}>{items}</li>
      ))
    }
    
    </>
  )
}



function App() {


  return (
    <>
      <FruitList  items={{
  skillList : ["Javascript", "Typescript", "React", "NextJS", "MongoDB"]
  
}} />

    </>
  )
}

item: {
  {
  skillList : ["Javascript", "Typescript", "React", "NextJS", "MongoDB"]
  
}
}





export default App
