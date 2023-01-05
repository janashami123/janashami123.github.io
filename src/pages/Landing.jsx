import React from "react";
import "./Landing.css";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Home from ".././pages/Home";

function Landing() {
  const [user, setUser] = useState({});
  const [date, setDate] = useState("");
  const [exp, setExp] = useState("");
  const handleSignOut = (event) => {
    setUser({});
    window.location.reload();
  };
  function handleCallbackResponse(response) {
    console.log("./pages/HomeEncoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(jwt_decode(response.credential));
    setUser(userObject);
    setDate(new Date(user.exp));
    console.log(new Date(user.exp));
    setExp(date - Date.now());
    console.log(date - Date.now());

    document.getElementById("signInDiv").hidden = true;
  }

  //authentication when the token expires

  // setTimeout(() => {
  //  handleSignOut()
  // }, 5000);

  useEffect(() => {
    /*global google*/
    google?.accounts?.id?.initialize({
      client_id:
        "786947683543-dmr2j7o6m6otdr90t22c1jdrn15tqdsb.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      size: "large",
      width: 400,
      height: 1500,
      longtitle: true,
      "border-radius": 5,
    });
  }, []);
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className="Landing">
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button className="sign-out" onClick={(e) => handleSignOut(e)}>
          Sign out
        </button>
      )}
      {!isEmpty(user) && <Home user={user} setUser={setUser} />}
    </div>
  );
}

export default Landing;
