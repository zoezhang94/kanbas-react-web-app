import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h4>Published Courses ({courses.length})</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4"
            style={{ marginLeft: '10px', marginRight: '10px' }}>
                {courses.map((course) => (
                    <div key={course._id} className="col">
                        <div className="card h-100">
                            <img src="/images/react.png" className="card-img-top"
                                alt={course.name} />
                            <div className="card-body">
                                <Link
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="card-title"
                                    style={{ textDecoration: 'underline', color: 'blue',
                                fontSize: '1.25rem'}}
                                >
                                    {course.name}
                                </Link>

                                <p className="card-text">
                                    {course.code}
                                    <br />
                                    {course.term}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
