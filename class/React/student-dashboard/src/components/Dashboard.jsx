import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [roll, setRoll] = useState('');
  const [division, setDivision] = useState('');
  const [search, setSearch] = useState('');

  // Add student
  const addStudent = () => {
    if (!name || !course || !roll || !division) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = { name, course, roll: Number(roll), division };
    setStudents([...students, newStudent]);

    setName('');
    setCourse('');
    setRoll('');
    setDivision('');
  };

  // Delete student
  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  // Filter search
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Dashboard stats
  const totalStudents = students.length;

  return (
    <div className="container">

      <h1>📊 Student Dashboard</h1>

      {/* Dashboard Stats */}
      <div className="stats">
        <div>Total Students: {totalStudents}</div>
      </div>

      {/* Form */}
      <h2>Add Student</h2>

      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
      <input type="number" placeholder="Roll" value={roll} onChange={(e) => setRoll(e.target.value)} />
      <input placeholder="Division" value={division} onChange={(e) => setDivision(e.target.value)} />

      <button onClick={addStudent}>Add</button>

      {/* Search */}
      <h2>Search Student</h2>
      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <h2>Student List</h2>

      <table border="1" style={{ margin: '20px auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Roll</th>
            <th>Division</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.roll}</td>
              <td>{s.division}</td>
              <td>
                <button onClick={() => deleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Dashboard;