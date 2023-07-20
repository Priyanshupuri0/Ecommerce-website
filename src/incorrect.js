import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Incorrect(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.href = props.reloadLocation;
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='text-danger'>
        Incorrect {props.toDisplay} Credentials
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Incorrect;