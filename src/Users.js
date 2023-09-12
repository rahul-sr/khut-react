import {
  useState,
  useEffect,
} from "react";
import useFetchHook from "./useFetchHook";

function Users() {
  const url =
    "https://randomuser.me/api/?results=25";
  const [users, setUsers] = useState(
    []
  );

  const [response, loading] =
    useFetchHook(url);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {response.map((user) => (
          <li key={user.cell}>
            <div>Cell: {user.cell}</div>
            <div>
              Name: {user.name.title}{" "}
              {user.name.first}{" "}
              {user.name.last}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
