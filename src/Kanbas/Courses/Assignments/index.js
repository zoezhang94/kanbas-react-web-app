import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentButton from "./AssignmentButton";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <AssignmentButton />
      </div>      
      <hr />
      <h2>Assignments</h2>

      <ul className="list-group w-100" >
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="d-flex align-items-center"
              style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
            >
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center">
                  <i className="fas fa-pencil-alt text-success me-2"></i>
                  <h4 className="mb-0">{assignment.title}</h4>
                </div>
                <h5 className="mb-0 mt-2" style={{ fontSize: '0.8rem' }}>{assignment.description}</h5>
                <p className="mb-0 mt-2" style={{ fontSize: '0.8rem' }}>Due {assignment.dueDate}</p>
              </div>
            </Link>
            <i className="fas fa-check-circle text-success"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
