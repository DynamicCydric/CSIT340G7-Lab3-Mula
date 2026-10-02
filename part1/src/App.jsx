const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.name} - {props.exercises} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
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
  const part1 = 'CSIT340 - Industry Elective 1'
  const exercises1 = 3
  const part2 = 'CSIT321 - Applications Development and Emerging Technologies'
  const exercises2 = 3
  const part3 = 'IT317 - Project Management for IT'
  const exercises3 = 3

  const studentName = 'James Sedric E. Mula'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App