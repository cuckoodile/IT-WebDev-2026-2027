import { useEffect, useState } from "react";
import { LoginAPI, UsersListAPI } from "../api/UsersListAPI";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const { access } = await LoginAPI("user01", "Password123!");
        const data = await UsersListAPI(access);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 flex-1">
      <h1>Users Page</h1>

      <section>
        {users.map((u) => (
          <div key={u.id}>
            {u.avatar && <img src={u.avatar} alt={u.username} className="size-80" />}
            <p>{u.username}</p>
            {u.last_name && u.first_name && (
              <p>
                {u.last_name}, {u.first_name}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
