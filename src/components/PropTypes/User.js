import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.id}</h3>
    </div>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

User.defaultProps = {
  data: PropTypes.shape({
    name: "John Doe",
    id: 110,
  }),
};

export default User;
