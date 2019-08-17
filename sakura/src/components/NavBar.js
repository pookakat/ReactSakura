import React from "react";
import axios from 'axios';

export default class NavBar extends React.Component {
    checkLogin = (event) => {
      event.preventDefault();
      const {uName, password} = document.getElementById("loginForm");
      const user=uName.value;
      if(uName.value && password.value){
        console.log(user, password.value);
        let route;
          if(window.location.href.includes('local')){
                route = "http://localHost:3001/api/login"
          } else {
              route = "/api/login";
          }
          console.log(route);
          axios.get(route, {
            method: 'GET',
          
            //  {
            //     "Access-Control-Request-Method": "POST",
            //     "Content-Type": "application/json"
            // },
            params:{
              uName: user,
              password: password.value
            }
        })
        .then(function(res){
            console.log(res);
            window.localStorage.setItem('userID', res.data[0].id);
            window.location.assign("/loggedin"); 
        })
        .catch(function(err){
            console.log(err);
        });
      }
      else{
        alert('Please input both a username and a password');
      }
    }
    render(){
        return(
            <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark dkpink-bkg">
            <a className="navbar-brand" href="/"><span role="img" aria-label="flower">🌸</span> Sakura</a>
            <form className="form-inline my-2 my-lg-0" id="loginForm" onSubmit={this.checkLogin}>
              <input className="form-control mr-sm-2" type="text" placeholder="User Name" id="uName" autoComplete="off" aria-label="Search"  />
              <input className="form-control mr-sm-2" type="password" placeholder="Password" id="password" autoComplete="off" aria-label="Search"  />
              <button className="btn my-2 my-sm-0 ltpink-bkg dkpink-txt" type="submit">Login</button>
            </form>
          </nav>
        );
    }
}