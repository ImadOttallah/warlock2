import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column align-content-center"
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <Image src="/./images/warlock.png" alt="" height={600} width={500} />
        <div>
          <Button type="button" className="btn btn-dark btn-sm copy-btn" onClick={signIn}>
            Sign In
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Signin;
