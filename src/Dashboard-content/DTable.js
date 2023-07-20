import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HandleUpdate from "../handleUpdate";
const DTable = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const ans = confirm("Are you sure you want to delete this user?");
    if(ans){
      fetch(`http://localhost:8080/deleteUser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchData();
        })
        .catch((err) => console.log(err));
    };
    }

  const modifyUser = (id, username, password) => {
    console.log(id, username, password);
    setSuccess(true);
    setSelectedUser({ id, username, password });
  };

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
      {success && (
        <HandleUpdate
          id={selectedUser.id}
          username={selectedUser.username}
          password={selectedUser.password}
          fetchData={fetchData}
        />
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Id</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{data.indexOf(item) + 1}</td>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>
                {
                  <>
                    <i
                      className="fa fa-pencil m-2"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                      title="Modify User"
                      onClick={() =>
                        modifyUser(item._id, item.username, item.password)
                      }
                    ></i>{" "}
                    <i
                      className="fa fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      aria-hidden="true"
                      title="Delete User"
                      onClick={() => deleteUser(item._id)}
                    ></i>
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DTable;
