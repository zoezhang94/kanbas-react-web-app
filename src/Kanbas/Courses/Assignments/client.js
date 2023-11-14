import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENT_URL = `${API_BASE}/assignments`;
const COURSES_URL = `${API_BASE}/courses`;

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
}

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
}

export const deleteAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENT_URL}/${assignmentId}`);
    return response.data;
}

export const updateAssignment = async (assignment) => {
    const response = await axios.
      put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
    return response.data;
  }