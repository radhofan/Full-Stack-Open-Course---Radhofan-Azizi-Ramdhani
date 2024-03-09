const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Course = (props) => {
    return (
      <div>
        <p>{props.course.name}</p>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name}</p>
        <p>{props.part.exercises}</p>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => (
          <Part key={part.name} part={part} />
        ))}
      </div>
    )
  }

  const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <div>
        <p>Number of exercises {totalExercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Course course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
