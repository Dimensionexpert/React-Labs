import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        if (!response.ok) {
          throw new Error(`HTTP error, ${response.status}`);
        }

        const data = await response.json();

        setUser(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("Something is not right", error);
        setError(error);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="app">
      {loading && <p className="spinner"></p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div className="card">
          <h2>{user.name}</h2>
          <h4>{user.email}</h4>
          <h3>Phone No. :{user.phone}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
