import React from "react";
import UserDetails from './UserDetails';
import UpdateInfo from './UpdateInfo';
import { BrowserRouter as Router, Route} from "react-router-dom";
  
function Index() {
    return <UserDetails />;
};
  
function UpdateRegisteredUser() {
    return <UpdateInfo />;
};

function AppRouter() {       
    return (
        <Router>
            <div>
                <Route path="/loggedin/" exact component={Index} />
                <Route path="/loggedin/updateInfo/" exact component={UpdateRegisteredUser} />
            </div>
        </Router>
    );
};


export default AppRouter;