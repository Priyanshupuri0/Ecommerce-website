import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = () => {
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("handle change");
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const [isSuccess, setIsSuccess] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "User Created Successfully") setIsSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isSuccess && (
        <div className="alert alert-success" role="alert">
          User added successfully!
        </div>
      )}
      <form onSubmit={addUser}>
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="username"
            value={users.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={users.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
