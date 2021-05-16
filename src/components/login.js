import React from "react";
import "../styles/login.css";
import {auth, provider} from '../firebase.js'
import {useStateValue} from '../stateProvider'
import {actionTypes} from '../reducer'

function login() {

  const[state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then( result => {
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user
            })
        }).catch((error) => alert(error.message));
    }
  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"></img>
        <button className='login_btn' type="submit" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default login;
