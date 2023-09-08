// GoogleAuth.js
import React from 'react';
import { useGoogleAuth } from './GoogleAuthModule';

export default function GoogleAuth() {
  const { user, profile, login, logOut } = useGoogleAuth();

  return (
    <div>
      {profile ? (
        <div>
          <img src={profile?.picture} alt="user" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={login}>Sign in with Google 🚀</button>
      )}
    </div>
  );
}
