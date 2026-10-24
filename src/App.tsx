
import './App.css'
import StudentCard from './compponents/StudentCard'


interface StudentInfoTypeProps {
 
    info : {
      name : string, 
      age : number,
      courses : string[]
    }
 
}



function App() {

  const studentData : StudentInfoTypeProps = {
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
