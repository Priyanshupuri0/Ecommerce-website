import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Incorrect from '../incorrect';
const ResetPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const [users, setUsers] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log("handle change");
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())  
      .then((data) => {
        console.log(data);
        if (data.message === "Password reset successfully") setIsSuccess(true);
        else setIsIncorrect(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      {isSuccess && (
        <div className="alert alert-success" role="alert">
          Password Reset Successfully!
        </div>
      )}
      { isIncorrect && <Incorrect reloadLocation = "/Dashboard"/>}
      
    <form onSubmit={resetPassword}>
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
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newpassword"
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

export default ResetPassword;
