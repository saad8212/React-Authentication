// FacebookAuth.js
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookAuth = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    if (response.status === 200) {
      setData(response);
      setPicture(response.picture.data.url);

    }
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div>
      {!login && (
        <FacebookLogin
          appId="322391063640239"
          autoLoad={true}
          fields="name,email,picture"
          enable_profile_selector={true}
          return_scopes={true}
          scope='email,public_profile'
          auth_type='rerequest'
          callback={responseFacebook}
          icon="fa-facebook"
        />
      )}
      {login && <img src={picture} alt="user" />}
      {login && (
        <>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </>
      )}
    </div>
  );
};

export default FacebookAuth;
