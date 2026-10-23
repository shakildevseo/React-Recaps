
import './App.css'
import StudentCard from './compponents/StudentCard'




function App() {

  const studentData = {
    info: {
      name: "Md Shakil Hossain",
      age: 20,
      courses: ["React", "JavaScript", "Tailwind"]

    }
  }



  return (

    <>
      <StudentCard studentInfo={studentData} />

    </>

  )


}






export default App
