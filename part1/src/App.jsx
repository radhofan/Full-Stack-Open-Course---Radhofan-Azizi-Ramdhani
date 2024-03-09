

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Course = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part}</p>
        <p>{props.exercise}</p>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <Part part={part1} exercise={exercises1}/>
        <Part part={part2} exercise={exercises2}/>
        <Part part={part3} exercise={exercises3}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Course course={course}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App
