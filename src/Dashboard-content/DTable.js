import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const DTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.users))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DTable;
