import React, { Fragment } from "react";

const UserProfile = ({ userData }) => {
  return (
    <Fragment>
      {userData.length > 0 && userData[0].description !== null ? (
        <Fragment>
          {userData.map((todo) => (
            <li className="list-group-item">{todo.description}</li>
          ))}
        </Fragment>
      ) : (
        <h3 className="text-center mt-3">No Todo</h3>
      )}
    </Fragment>
  );
};

export default UserProfile;
