import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const Users = ({ isAuth }) => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("http://localhost:5000/users", { method: "GET" });
    const parseRes = await res.json();
    setUsers(parseRes);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-around mt-5">
        {" "}
        <h1 className="">See what others are doing</h1>
        <Link to="/" className="btn btn-primary h-100">
          {isAuth ? "Go back to Dashboard" : "Go back to Landing Page"}
        </Link>
      </div>

      {users.map(({ user_name, user_id }) => (
        <Fragment>
          <UserCard username={user_name} userId={user_id} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Users;
