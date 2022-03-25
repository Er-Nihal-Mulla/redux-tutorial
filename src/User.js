import React from "react";

const User = (props) => {
  console.log(props.data.name);
  const { data } = props;

  return (
    <div>
      <h1>user component</h1>
      <h4>{data.name}</h4>
    </div>
  );
};
export default User;
