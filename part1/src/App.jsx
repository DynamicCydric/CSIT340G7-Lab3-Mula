const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} - {props.part.exercises} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total units:</strong> {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Information Technology'
  const part1 = {
    name: 'CSIT340 - Industry Elective 1',
    exercises: 3
  }
  const part2 = {
    name: 'CSIT321 - Applications Development and Emerging Technologies',
    exercises: 3
  }
  const part3 = {
    name: 'IT317 - Project Management for IT',
    exercises: 3
  }

  const studentName = 'James Sedric E. Mula'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App