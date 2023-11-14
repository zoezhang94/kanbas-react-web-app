import axios from "axios";

export const fetchCourses = async () => {
    const response = await axios.get("https://kanbas-node-server-app-wenxi.onrender.com/api/courses");
    return response.data;
};

export const fetchCourseById = async (id) => {
    const response = await axios.get(
        `http://localhost:4000/api/courses/${id}`
    );
    return response.data;
}

export const deleteCourse = async (id) => {
    const response = await axios.delete(
        `http://localhost:4000/api/courses/${id}`
    );
    return response.data;
}

export const addCourse = async (course) => {
    const response = await axios.post(
        `http://localhost:4000/api/courses/`, course
    );
    return response.data;
}

export const updateCourse = async (course) => {
    const response = await axios.put(
        `http://localhost:4000/api/courses/${course._id}`, course
    );
        return response.data;
}