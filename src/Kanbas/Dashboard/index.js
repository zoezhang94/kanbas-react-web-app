import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../Courses/client";

function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});

    const fetchCourses = async () => {
        const courses = await client.fetchCourses();
        setCourses(courses);
    };

    const deleteCourse = async (id) => {
        try {
            await client.deleteCourse(id);
            setCourses(courses.filter((course) => course._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const addCourse = async () => {
        const newCourse = await client.addCourse(course);
        setCourses([newCourse, ...courses]);
    }

    const updateCourse = async () => {
        try {
            await client.updateCourse(course);
            setCourses(courses.map((c) => (c._id === course._id ? course : c)));
        }
        catch (error) {
            console.log(error);
        }
    }

    const inputStyle = {
        width: '60%',
        marginBottom: '10px',
        padding: '10px',
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <input
                type="text"
                placeholder="Course Name"
                value={course.name || ''}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="Course Code"
                value={course.code || ''}
                onChange={(e) => setCourse({ ...course, code: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="Course Term"
                value={course.term || ''}
                onChange={(e) => setCourse({ ...course, term: e.target.value })}
                style={inputStyle}
            />
            <br />
            <button onClick={addCourse} className="btn btn-success">
                Add Course
            </button>
            <button onClick={updateCourse} className="btn btn-warning">
                Update Course
            </button>
            <div>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course, index) => (
                        <div className="col" key={course._id} style={{ width: 300 }}>
                            <div className="card">
                                <img src="/images/react.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">{course.name}</h3>
                                    <button
                                        onClick={() => deleteCourse(course._id)}
                                        className="btn btn-danger float-end"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setCourse(course)}
                                        className="btn btn-warning float-end me-2"
                                    >
                                        Edit
                                    </button>
                                    <Link
                                        key={course._id}
                                        to={`/Kanbas/Courses/${course._id}`}
                                        className="btn btn-primary"
                                    >
                                        {course.name}
                                    </Link>
                                    <p className="card-text">
                                        Code: {course.code}<br />
                                        Term: {course.term}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;