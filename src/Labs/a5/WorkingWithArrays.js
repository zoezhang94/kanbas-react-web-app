import React, { useEffect, useState } from "react";
import axios from "axios";
export default function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [selectedTodoId, setSelectedTodoId] = useState(null);
    const [title, setTitle] = useState("Go to Work");
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleEditClick = (todoId) => {
        setSelectedTodoId(todoId);
        setId(id);

    };

    const removeTodo = async (id) => {
        const response = await axios
            .get(`${API}/${id}/delete`);
        setTodos(response.data);
    };

    const deleteTodo = async (id) => {
        const response = await axios
            .delete(`${API}/${id}`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(`${API}`,
            { title: title });
        setTodos(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${id}/title/${title}`);
        setTodos(response.data);
    };

    const updateTodo = async () => {
        const response = await axios.put(
            `${API}/${id}`,
            { title: title });
        setTodos(response.data);
    };

    return (
        <div>
            <h3>Working With Arrays</h3>
            <input
                className="form-control"
                value={id}
                placeholder="Enter ID"
                onChange={(e) => setId(
                    e.target.value
                )} />
            <input
                className="form-control"
                value={title}
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)} />
            <button className="btn btn-primary mb-2 w-100"
                onClick={createTodo}>
                Create Todo
            </button>
            <button className="btn btn-success mb-2 w-100" onClick={() => updateTitle(id, title)}>
                Update Title
            </button>
            <button className="btn btn-warning mb-2 w-100" onClick={postTodo} >
                Post Todo
            </button>
            <button className="btn btn-secondary mb-2 w-100" onClick={updateTodo}>
                Update Todo
            </button>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id} style={{ margin: 0 }}>
                        <span style={{ color: 'blue', marginRight: 10 }}>
                            {todo.id}
                        </span>
                        <button
                            className="btn btn-danger me-2 float-end"
                            onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button
                            className="btn btn-warning me-2 float-end"
                            onClick={() => handleEditClick(todo.id)}>
                            Edit
                        </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <a href={`${API}/${id}`} className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>

            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Updating an Item in an Array</h3>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />

            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>


            <h4>Modifying todos Complete Status</h4>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo,
                    completed: e.target.checked
                })}
                checked={todo.completed}
                type="checkbox"
                style={{ marginRight: '10px' }}
            />

            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-info "
            >
                Confirm Completed
            </a>

        </div>
    );
}
