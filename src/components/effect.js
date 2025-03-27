import { useState, useEffect } from "react";

const Title = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []); // Empty array = fetch only once when the component mounts
  
    return (
      <div>
        <h2>Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Title;
