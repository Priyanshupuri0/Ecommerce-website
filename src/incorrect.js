import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Incorrect() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.href = "/Admin";
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='text-danger'>
        Incorrect Login Credentials
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Incorrect;