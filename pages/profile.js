import React from 'react';
import User from '../components/Users';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <User
        name={user.displayname}
        email={user.email}
        lastLogin={user.metadata.lastSignInTime}
        image={user.photoURL}
      />
      <button size="sm" type="button" onClick={signOut}>Sign Out</button>
    </div>
  );
}
