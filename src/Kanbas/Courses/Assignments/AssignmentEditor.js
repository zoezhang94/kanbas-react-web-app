import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { findAssignmentsForCourse,createAssignment} from "./client";
import * as client from "./client";



function AssignmentEditor() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  return (
    <ul className="list-group">
       <li className="list-group-item">
      
        <div className="input-group">
            <textarea className="course-input " value={assignment.title}
                onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, title: e.target.value }))
                }/>
            <textarea className="course-input " value={assignment.description}
                onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                }/>
            <textarea className="course-input " value={assignment.dueDate}
                onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                }/>
        </div>

        <button type="button" className="btn btn-success float-end"
          onClick={handleAddAssignment}>
          Add</button>
          <button type="button" className="btn btn-primary float-end"
          onClick={handleUpdateAssignment}>
          Update
        </button>
      </li>


      {
       assignments
         .filter((assignment) => assignment.course === courseId)
         .map((assignment, index) => (
           <li key={index} className="list-group-item">
            <button type="button" className="btn btn-warning float-end"
              onClick={() => dispatch(setAssignment(assignment))}>
              Edit
            </button>

             <button type="button" className="btn btn-danger float-end"
              onClick= {() => handleDeleteAssignment(assignment._id)}>
              Delete
            </button>
             <h4>{assignment.title}</h4>
             <p>{assignment.description}</p>
            <h6>{assignment.dueDate}</h6>
           </li>
      ))
      }
    </ul>
  );
}
export default AssignmentEditor;
