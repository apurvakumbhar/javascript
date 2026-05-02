import React, { useState } from 'react';

function Student() {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [roll, setRoll] = useState('');
  const [division, setDivision] = useState('');

  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const newStudent = {
      name,
      course,
      roll,
      division
    };

    setStudents([...students, newStudent]);
    setName('');
    setCourse('');
    setRoll('');
    setDivision('');
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Roll"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Division"
        value={division}
        onChange={(e) => setDivision(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>Add</button>

      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Roll</th>
            <th>Division</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.roll}</td>
              <td>{s.division}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;