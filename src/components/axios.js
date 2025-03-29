import { useState } from "react";
import '../App.css';
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    axios.get("/data.json") // Fetch from local JSON file
      .then((response) => {
        setUsers(response.data);
        setShowUsers(true);
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

export default UsersList;
