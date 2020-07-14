import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const User = ({ match, isAuth }) => {
  const [userData, setUserData] = useState([]);

  async function getUser() {
    try {
      const res = await fetch(`http://localhost:5000/users/${match.params.id}`);

      const parseRes = await res.json();

      setUserData(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-around mt-5">
        <h1>{userData.length > 0 ? userData[0].user_name : "Loading ..."}</h1>
        <Link to="/" className="btn btn-primary h-100">
          {isAuth ? "Go back to Dashboard" : "Go back to Landing Page"}
        </Link>
        <Link to="/users" className="btn btn-primary h-100">
          See all users
        </Link>
      </div>

      <UserProfile userData={userData} />
    </Fragment>
  );
};

export default User;
