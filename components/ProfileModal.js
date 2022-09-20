/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

function UserProfile() {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="profileBlock">
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt={user} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={signOut} variant="primary">
            Sign Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserProfile;
