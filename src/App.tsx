
import './App.css'


function FruitList({ items }) {


  return (
    <>

      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }



    </>

  )
}



function App() {


  return (
    <>
      <FruitList items={["Apple", "Banana", "Cherry ", "Quince"]} />

    </>
  )
}



export default App
