import "./index.css";
import Card from "./card";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    return (
        <>
            <h1>Dashboard</h1>
            <hr />
            <div className="container-fluid">
                <h4>Published Courses({courses.length})</h4>
                <hr />

                <div
                    className="d-flex flex-wrap justify-content-start "
                    id="cards-container">
                    {
                        courses.map(course => {
                            return (<Card
                                course={course}
                                onDelete={() => deleteCourse(course._id)}
                                onEdit={(selectedCourse) => {
                                    setCourse(selectedCourse);
                                }}
                            />);
                        })

                    }
                </div>
                <br />

                <h5>Update Course</h5>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button type="button" class="btn btn-danger float-end"
                    onClick={addNewCourse} >
                    Add
                </button>
                <button type="button" class="btn btn-success float-end"
                    onClick={updateCourse} >
                    Update
                </button>

            </div>
        </>
    );
}
export default Dashboard;