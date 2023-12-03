import React from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import * as client from './client';
import * as likesClient from '../likes/client';
import { useState, useEffect } from 'react';

function UserDatils() {
    const [user, setUser] = useState(null);
    const [likes, setLikes] = useState([]);
    const { userId } = useParams();
    const navigate = useNavigate();
    const fetchUser = async () => {
        const user = await client.findUserById(userId);
        setUser(user);
    };

    const updateUser = async () => {
        const status = await client.updateUser(userId, user);
        // setUser(updatedUser);
    };

    const deleteUser = async (userId) => {
        const status = await client.deleteUser(userId);
        navigate('/project/users');
    }

    const fetchLikes = async () => {
        const likes = await likesClient.findMoviesLikedByUser(userId);
        setLikes(likes);
    }

    useEffect(() => {
        fetchUser();
        fetchLikes();
    }, []);

    return (
        <div>
            <h1>Details</h1>
            {user && <div>
                <p>User Name : {user.username}</p>
                <p>Email : {user.email}</p>
                <p>First Name :
                    <input
                        type='text'
                        className='form-control'
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    />
                </p>
                <p>Last Name : {user.lastName}</p>
                <p>Role : {user.role}</p>
                <button className='btn btn-success' onClick={updateUser}>Update</button>
                <button className='btn btn-danger'
                    onClick={() => deleteUser(user._id)}>Delete</button>
                <h2>Likes</h2>
                <ul className='list-group'>
                    {likes.map((like, index) => (
                        <li key={index} className='list-group-item'>
                            <Link to={`/project/details/${like.movieId}`}>
                                {like.movieId}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>}

        </div>
    )
}

export default UserDatils;