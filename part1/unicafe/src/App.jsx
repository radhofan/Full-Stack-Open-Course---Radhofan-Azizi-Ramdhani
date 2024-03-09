import React, { useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const totalFeedback = good + neutral + bad;
  const averageScore = ((good - bad) / totalFeedback) || 0;
  const positiveFeedbackPercentage = ((good / totalFeedback) * 100) || 0;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />

      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={totalFeedback} />
          <StatisticLine text="Average Score" value={averageScore.toFixed(2)} />
          <StatisticLine text="Positive Feedback Percentage" value={`${positiveFeedbackPercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
