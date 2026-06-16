import './App.css'
import Student from './Student'

const students = [
  {
    name: 'Naman Vaish',
    course: 'Computer Science',
    marks: 85,
  },
  {
    name: 'Manan Vaish',
    course: 'Information Technology',
    marks: 92,
  },
  {
    name: 'Vaish',
    course: 'Electronics',
    marks: 78,
  },
]

function App() {
  return (
    <main className="page">
      <section className="student-container">
        <h1>Student Information</h1>

        <div className="student-list">
          {students.map((student) => (
            <Student
              key={student.name}
              name={student.name}
              course={student.course}
              marks={student.marks}
            />
          ))}
        </div>
      </section>
    </main>
  
  )
}
<p><h4>NAME-NAMAN VAISH</h4>
<h5>ROLL No-2503201000749</h5></p>
export default App
