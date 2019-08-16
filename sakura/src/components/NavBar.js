import React from "react";

export default class NavBar extends React.Component {
    render(){
        return(
            <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark dkpink-bkg">
            <a className="navbar-brand" href="/"><span role="img" aria-label="flower">🌸</span> Sakura</a>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="User Name" autoComplete="off" aria-label="Search"  />
              <input className="form-control mr-sm-2" type="password" placeholder="Password" autoComplete="off" aria-label="Search"  />
              <button className="btn my-2 my-sm-0 ltpink-bkg dkpink-txt" type="submit">Login</button>
            </form>
          </nav>
        );
    }
}