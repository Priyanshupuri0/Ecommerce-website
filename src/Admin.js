import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Incorrect from "./incorrect";

const cookies = new Cookies();
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const [isCorrect, setIsCorrect] = useState(false);


  const handleSubmit = (e) => {
    console.log("I am in");
    e.preventDefault();
    fetch("http://localhost:8080/sendForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLogin(true);

        console.log("Data fetched");
        if (typeof data.token !== "undefined") {
          // Set the cookie
          document.cookie = `TOKEN=${data.token}; path=/`;
          window.location.href = "/Dashboard";
        } else {
          //   window.location.href = "/Admin";
          setIsCorrect(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MDBContainer fluid className="p-3 mainContainer">
      {isCorrect && <Incorrect reloadLocation = "/Admin" toDisplay = "Login"/>}
      <MDBRow>
        <h1 className="text-center mt-3 mb-5">Admin Login </h1>

        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <form onSubmit={(e) => handleSubmit(e)}>
            <MDBInput
              wrapperClass="mb-4"
              className="mt-4"
              label="User Name"
              id="formControlUs"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="lg"
              name="username"
            />
            <MDBInput
              wrapperClass="mb-4"
              className="mt-2"
              label="Password"
              id="formControlPw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              name="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              onClick={(e) => handleSubmit(e)}
            >
              Sign in
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
