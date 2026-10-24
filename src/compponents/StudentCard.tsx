

interface StudentCardProps {
  studentInfo :{
    info : {
      name : string,
      age :  number,
      courses : string[]
    }
  }
}



function StudentCard({ studentInfo: { info: { name, age, courses } } } : StudentCardProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <ul>
        {
          courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))
        }
      </ul>



    </>
  )
}

export default StudentCard