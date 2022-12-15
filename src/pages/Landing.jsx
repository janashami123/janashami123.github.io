
import React from 'react';
import'./Landing.css'
import jwt_decode from "jwt-decode"
import { useEffect,useState} from 'react';
import Home from '.././pages/Home';


function Landing() {
    const[user,setUser]=useState({})
  function handleCallbackResponse(response) {
    console.log('./pages/HomeEncoded JWT ID token:' + response.credential);
    var userObject =jwt_decode(response.credential);
    console.timeLog(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden=true;
  }
  


  useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({client_id:"786947683543-dmr2j7o6m6otdr90t22c1jdrn15tqdsb.apps.googleusercontent.com",
    callback:handleCallbackResponse});

    google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {size:'large','width': 400,
    'height': 1500,
    'longtitle': true,
    'border-radius': 5,
   },
    );
  },[]);
  function isEmpty(obj) {
      return Object.keys(obj).length === 0;
  }
  console.log("user" ,isEmpty(user));
  return (
    <div className='Landing'>
        {!isEmpty(user) ?
        <Home
        user={user}
        setUser={setUser}/>
        :
        <div id='signInDiv'></div>}
      
    </div>
  )
}

export default Landing
