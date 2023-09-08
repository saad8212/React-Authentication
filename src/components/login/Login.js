import React from 'react'
import classes from './Login.module.css'
 

import FacebookLogin from 'react-facebook-login'; 
import InstagramLogin from 'react-instagram-login';
import TwitterLogin from "react-twitter-login";

//redux
import { useDispatch } from 'react-redux' 
import Box from './../../UI/Box';
import { login } from './../../store/features/auth';
import GoogleAuth from './../GoogleAuth';

const Login = () => {

    const dispatch = useDispatch()

    const thirdPartyLoginHandler = ({ response, provider, error }) => {
        console.log(" response>>", response)
        console.log(" provider>>", provider)
        console.log(" error>>", error)
        dispatch(login({ user: response, provider, error }))

    }

    const responseTwitter = (err, data) => {
        // console.log(err, data);
        if (err) return thirdPartyLoginHandler({ error: true, provider: 'twitter', response: {} })

        thirdPartyLoginHandler({ error: false, provider: 'twitter', response: data })
    };

    const responseFacebook = (response) => {
        // console.log('response >>>', response);
        if (response.status === 'unknown' || response.status === undefined || response.error)
            return thirdPartyLoginHandler({ error: true, provider: 'facebook', response: {} })

        thirdPartyLoginHandler({ error: false, provider: 'facebook', response })
    }

    const successResponseInstagram = (response) => thirdPartyLoginHandler({ error: false, provider: 'instagram', response })
    const failResponseInstagram = (err) => thirdPartyLoginHandler({ error: true, provider: 'instagram', responce: {} })

   
    return (
        <Box className={classes.login}>
            <h1>Login</h1>
            <FacebookLogin
                appId="322391063640239"
                // autoLoad={true}
                fields="name,email,picture"
                cssClass={classes.login__btn}
                callback={responseFacebook}
                textButton="Login with Facebook"
            />
             <GoogleAuth/>
            <InstagramLogin
                clientId="ad6d0ba2753ddfe70dd3a33522df5e7a"
                onSuccess={successResponseInstagram}
                onFailure={failResponseInstagram}
                cssClass={classes.login__btn}
            >Login with Instagram</InstagramLogin>
            <TwitterLogin
                authCallback={responseTwitter}
                className={classes.login__btn}
                // consumerKey={CONSUMER_KEY}
                consumerSecret={'L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg'}
            // children={<button>Login with Twitter</button>}
            >Login with Twitter</TwitterLogin>
        </Box>
    )
}

export default Login
