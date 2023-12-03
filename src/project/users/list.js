import * as client from './client';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // [1
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const user = await client.account();
      setCurrentUser(user);
    } catch (error) {
      navigate('/project/signin');
    }
  };
  

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
    fetchUser();
  }, []);

  return (
    <div>
      {currentUser && currentUser.role === 'ADMIN' && (
        <>

          <h2>Users List</h2>
          <div className='list-group'>
            {users.map((user) => (
              <Link key={user._id}
                to={`/project/users/${user._id}`}
                className='list-group-item'>
                {user.username}
              </Link>
            ))}
          </div>
        </>
      )}
      {currentUser && currentUser.role !== 'ADMIN' && (
        <h2>Access Denied. ADMIN only</h2>
        )}
    </div>
  );
}

export default UsersList;