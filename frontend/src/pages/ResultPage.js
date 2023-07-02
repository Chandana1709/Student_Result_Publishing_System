import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { usn, department, semester, year, fresherOrBacklog, resultYear, subjects } = location.state;

  return (
    <div>
      <h2>Result Page</h2>
      <p>USN: {usn}</p>
      <p>Department: {department}</p>
      <p>Semester: {semester}</p>
      <p>Year: {year}</p>
      <p>Fresher or Backlog: {fresherOrBacklog}</p>
      {fresherOrBacklog === 'backlog' && (
        <div>
          <p>Result Year: {resultYear}</p>
          <p>Subjects: {subjects}</p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
