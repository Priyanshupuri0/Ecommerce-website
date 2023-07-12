import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, BrowserRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const location = useLocation();
  const cookies = new Cookies();

  const token = cookies.get("TOKEN");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const hasTokenCookie = document.cookie.includes("TOKEN");
  
  if (hasTokenCookie) {
    console.log("Token cookie exists");
  } else {
    window.location.href = "/Admin";
  }

  useEffect(() => {
    // set configurations for the API call here
    const url = 'http://localhost:8080/auth-endpoint';
    const options = {
      method: 'GET',
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
          throw new Error('API request failed.');
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

  useEffect(() => {
    const handlePopstate = () => {
      logout();

    };

    // window.addEventListener('popstate', handlePopstate);
    window.addEventListener('pagehide', handlePopstate);
    window.addEventListener('beforeunload', handlePopstate);
    // document.addEventListener('visibilitychange', handlePopstate);

    return () => {
      // window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('pagehide', handlePopstate);
      window.removeEventListener('beforeunload', handlePopstate);
      // window.removeEventListener('visibilitychange', handlePopstate);
    };
  }, []);


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
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button type="submit" variant="danger" onClick={() => logout()}>Logout</Button>
    </div>
  );
};

export default Dashboard;