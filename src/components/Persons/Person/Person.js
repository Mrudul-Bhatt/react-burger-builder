import React from "react";

const person = (props) => {
  return (
    <div>
      <button onClick={props.changeNameVal}>Change Name</button>
      {props.changeNameValState ? (
        <input
          type="text"
          onChange={(e) => props.changeName(e)}
          value={props.name}
        />
      ) : null}
      <h1>{props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
