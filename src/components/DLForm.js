import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap';

function DLForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow} style = {{marginBottom: "20px"}}>
          Create Driver Listing
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Create Driver Listing</Modal.Title>
          </Modal.Header>
          <Modal.Body> Where driver listing form would be </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DLForm; 