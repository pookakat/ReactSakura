import React from "react";

export default class ToggleSwitch extends React.Component {
    /*goToRegister(){
      window.location.assign("/register");  
    };*/
    render(){
        return(
            <div className="toggle-switch form-group row">
                <label htmlFor="themeToggle">Dont like this theme? Try: </label>
                    <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
            </div>
        )
    }};