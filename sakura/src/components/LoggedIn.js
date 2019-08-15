import React from "react";

export default class LoggedIn extends React.Component {
    goToRegister(){
      window.location.assign("/logged-in");  
    };
    render(){
        return(
            <div id="info-box" className="about-us ltgreen-bkg">
                <h2>Log In Successful!</h2>
                <p className="lead">Welcome to your Sakura Profile</p>
            </div>
        );
    }
}