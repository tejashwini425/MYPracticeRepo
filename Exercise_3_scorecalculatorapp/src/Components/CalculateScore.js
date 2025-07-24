 
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Tejashwini";
  const school = "DSATM";
  const total = 450;
  const goal = 500;

  const average = ((total / goal) * 100).toFixed(2);

  return (
    <div className="score-card">
      <h1>Student Score Calculator</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal Marks:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}%</p>
    </div>
  );
}

export default CalculateScore;
