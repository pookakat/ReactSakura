import React from "react";
import MatchWrapper from './matchWrapper/matchWrapper';

export default class LoggedIn extends React.Component {
    goToRegister(){
      window.location.assign("/logged-in");  
    };


    render(){
        return(
            <div id="info-box" className="about-us ltpink-bkg">
                <h2>Log In Successful!</h2>
                <p className="lead">Welcome to your Sakura Profile</p>


                <p> Potential matches:</p>
                <MatchWrapper></MatchWrapper>
            </div>
        );
    }
}