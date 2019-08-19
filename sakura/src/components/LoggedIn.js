import React from "react";
import UserPageShell from './UserPageShell';


export default class LoggedIn extends React.Component {
    goToRegister(){
      window.location.assign("/logged-in");  
    };


    render(){
        return(
            <div id="info-box" className="about-us ltpink-bkg">
                <h2>Welcome <span id="userName"></span>!</h2>
                <UserPageShell />
            </div>
        );
    };
    componentDidMount(){
        const currentUser = window.localStorage.getItem('userName');
        console.log('hi?');
        console.log(window.localStorage.getItem('userName'));
        document.getElementById('userName').textContent = currentUser;
    };
}