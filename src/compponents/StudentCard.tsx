

function StudentCard({ studentInfo: { info: { name, age, courses } } }) {
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