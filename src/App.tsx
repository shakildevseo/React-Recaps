
import './App.css'


// With props object destructuring 


// method : 1

function User(props) {
  const { name, email, age } = props
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>

    </>
  )
}

// method : 2

function User({ name, email, age }) {

    return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>

    </>
    )
}






function App() {

  return (
    <>

      <User name="Md Shakil Hossain" email="shakiltest@gmail.com" age={20} />

    </>
  )
}



export default App
