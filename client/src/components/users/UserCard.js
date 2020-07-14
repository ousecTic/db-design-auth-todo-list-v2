import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ username, userId }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{username}</h3>
          <Link to={`users/${userId}`} className="card-link">
            See Todos
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UserCard;
