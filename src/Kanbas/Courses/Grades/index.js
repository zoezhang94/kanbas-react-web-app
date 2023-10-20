import React, { useState } from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { FiDownload, FiUpload } from 'react-icons/fi';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEnrollments = enrollments.filter(enrollment => {
    const user = db.users.find(user => user._id === enrollment.user);
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Gradebook</h1>

      {/* Search and Filter Components */}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search Students"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div style={{ marginBottom: '20px' }}>
          <button style={{ marginRight: '10px' }}>
            <FiDownload style={{ marginRight: '5px' }} />
            Import
          </button>
          <button>
            <FiUpload style={{ marginRight: '5px' }} />
            Export
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEnrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
