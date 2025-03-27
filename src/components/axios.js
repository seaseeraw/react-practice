import { useState } from "react";
import axios from "axios";

const Usersgit = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false); // Controls visibility

  const fetchUsers = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setShowUsers(true); // Show users only after fetching
      })
      .catch((error) => console.error("Error fetching users:", error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>

      {showUsers && (
        <div>
          <h2>Users List</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;
