import React from 'react';

const Header = (props) => {
  return (
    <div>
      <p>{props.course.name}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name}</p>
      <p>{props.part.exercises}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Number of exercises: {totalExercises}</p>
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  );
};

export default Course;
