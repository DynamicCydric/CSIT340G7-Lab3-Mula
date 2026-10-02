const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} - {props.part.exercises} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const total =
    props.course.parts[0].exercises +
    props.course.parts[1].exercises +
    props.course.parts[2].exercises

  return <p><strong>Total units:</strong> {total}</p>
}

const Footer = (props) => {
  return (
    <footer style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Information Technology',
    parts: [
      {
        name: 'CSIT340 - Industry Elective 1',
        exercises: 3
      },
      {
        name: 'CSIT321 - Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'IT317 - Project Management for IT',
        exercises: 3
      }
    ]
  }

  const studentName = 'James Sedric E. Mula'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App