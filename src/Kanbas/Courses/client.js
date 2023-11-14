import axios from "axios";

export const fetchCourses = async () => {
    const response = await axios.get("https://kanbas-node-server-app-wenxi.onrender.com/api/courses");
    return response.data;
};

export const fetchCourseById = async (id) => {
    const response = await axios.get(
        `https://kanbas-node-server-app-wenxi.onrender.com/api/courses/${id}`
    );
    return response.data;
}

export const deleteCourse = async (id) => {
    const response = await axios.delete(
        `https://kanbas-node-server-app-wenxi.onrender.com/api/courses/${id}`
    );
    return response.data;
}

export const addCourse = async (course) => {
    const response = await axios.post(
        `https://kanbas-node-server-app-wenxi.onrender.com/api/courses/`, course
    );
    return response.data;
}

export const updateCourse = async (course) => {
    const response = await axios.put(
        `https://kanbas-node-server-app-wenxi.onrender.com/api/courses/${course._id}`, course
    );
        return response.data;
}