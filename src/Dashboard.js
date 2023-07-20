import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Navigate, BrowserRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import styles from "./Dashboard.css";
import { InputGroup, FormControl } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import DTable from "./Dashboard-content/DTable";
import AddUser from "./Dashboard-content/AddUser";
import styled from "styled-components";
import ResetPassword from "./Dashboard-content/ResetPassword";

const StyledComponents = styled.div`
body {
  background-color: #dadada;
  height: 1000px;
}`;
const Dashboard = () => {


  const items = [
    { id: 1, text: "Create User" },
    { id: 2, text: "Edit Account Details" },
    { id: 3, text: "Create Categories" },
    { id: 4, text: "Manage Commission" },
    { id: 5, text: "Upload/Edit Records" },
    { id: 6, text: "View/Edit Database" },
    { id: 7, text: "Overwatch/Append KYC documents" },
    { id: 8, text: "Payment Gateway Management" },
    { id: 9, text: "Password Reset" },
  ];
  const [is1, setis1] = useState(false);
  const [is2, setis2] = useState(false);
  const [is3, setis3] = useState(false);
  const [is4, setis4] = useState(false);
  const [is5, setis5] = useState(false);
  const [is6, setis6] = useState(false);
  const [is7, setis7] = useState(false);
  const [is8, setis8] = useState(false);
  const [is9, setis9] = useState(false);

  const states = [
    setis1,
    setis2,
    setis3,
    setis4,
    setis5,
    setis6,
    setis7,
    setis8,
    setis9,
  ];
  const handleComponent = (key) => {
    states.forEach((setis, index) => {
      setis(key === index + 1);
    });
  };

  const componentList = [
    { component: <AddUser />, state: is1 },
    { component: <AddUser />, state: is2 },
    { component: <AddUser />, state: is3 },
    { component: <AddUser />, state: is4 },
    { component: <AddUser />, state: is5 },
    { component: <DTable />, state: is6 },
    { component: <AddUser />, state: is7 },
    { component: <AddUser />, state: is8 },
    { component: <ResetPassword />, state: is9 },
  ];

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const location = useLocation();
  const cookies = new Cookies();

  const token = cookies.get("TOKEN");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const hasTokenCookie = useRef(document.cookie.includes("TOKEN"));
  useEffect(() => {
    if (hasTokenCookie) {
      console.log("Token cookie exists");
    } else {
      window.location.href = "/Admin";
    }
  }, []);

  useEffect(() => {
    // set configurations for the API call here
    const url = "http://localhost:8080/auth-endpoint";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call using fetch
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API request failed.");
        }
      })
      .then((data) => {
        // assign the message in our data to the message we initialized above
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   const handlePopstate = () => {
  //     logout();

  //   };

  //   // window.addEventListener('popstate', handlePopstate);
  //   window.addEventListener('pagehide', handlePopstate);
  //   window.addEventListener('beforeunload', handlePopstate);
  //   // document.addEventListener('visibilitychange', handlePopstate);

  //   return () => {
  //     // window.removeEventListener('popstate', handlePopstate);
  //     window.removeEventListener('pagehide', handlePopstate);
  //     window.removeEventListener('beforeunload', handlePopstate);
  //     // window.removeEventListener('visibilitychange', handlePopstate);
  //   };
  // }, []);

  // const [isAuthorized, setIsAuthorized] = useState(false);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   setIsAuthorized(false);
  //   navigate("/", { replace: true });
  // };

  // // if (!isAuthorized) {
  // //   return <Navigate replace to = '/'/>;
  // // }

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  };

  return (
    <StyledComponents>
    <div className="main-container">
      <Container fluid style={{ backgroundColor: "#dadada", height: "100%" }}>
        <Row>
          <Col md={12}>
            <header
              className="d-flex justify-content-between align-items-center bg-primary"
              style={{
                height: "4rem",
                width: "100%",
                // backgroundColor: "#4cb5f5",
              }}
            >
              <span className="m-4" style={{ color: "#fff" }}>
                {" "}
                {currentTime}{" "}
              </span>
              <Button variant="danger" style={{ marginRight: "1rem" }} onClick={() => logout()}>
                Logout
              </Button>
            </header>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="">
            <nav>
              {/* Add your navigation links here */}
              <ListGroup>
                {items.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    action
                    onClick={() => handleComponent(item.id)}
                  >
                    {item.text}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </nav>
          </Col>
          <Col md={10}>
            <main>
              {/* Add your main content here */}
              {componentList.map((item, index) => {
                if (item.state) {
                  return (
                    <React.Fragment key={index}>
                      {item.component}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </main>
          </Col>
        </Row>
      </Container>
    </div>
    </StyledComponents>
  );
};

export default Dashboard;
