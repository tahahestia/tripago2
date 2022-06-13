import React, { useState } from "react";

const Fullname = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const fullNameHandler = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <div>
        <input type="text" value={firstName} onChange={(e) => changeFirstNameHandler(e)} />
      </div>
      <div>
        <input type="text" value={lastName} onChange={(e) => changeLastNameHandler(e)} />
      </div>
      <div>
        <button onClick={fullNameHandler}>click me</button>
      </div>
    </div>
  );
};

export default Fullname;
