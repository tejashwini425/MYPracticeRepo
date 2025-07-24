import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const sampleCohorts = [
    { name: "MERN Stack Training", status: "ongoing", startDate: "July 1", endDate: "Sept 30" },
    { name: "Python Bootcamp", status: "completed", startDate: "April 1", endDate: "June 30" }
  ];

  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {sampleCohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
