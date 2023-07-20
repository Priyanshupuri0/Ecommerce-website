import React from 'react'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'


const HandleUpdate = (props) => {
    const [show, setShow] = useState(true);
    const [username, setUsername] = useState(props.username);
    const [password, setPassword] = useState(props.password);
    const handleClose = () => {
        setShow(false);
    }

    const updateDetails = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
          };
          fetch(`http://localhost:8080/updateUser/${props.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              props.fetchData();
            })
            .catch((err) => console.log(err));
    }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='text-danger'>
            Enter details to Update
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" placeholder="Enter Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={updateDetails}>Update</button>
                </form>

        </Modal.Body>
        </Modal>

        
    </div>
  )
}

export default HandleUpdate
