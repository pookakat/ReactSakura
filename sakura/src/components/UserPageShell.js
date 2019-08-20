import React from "react";
import UserDetails from './UserDetails';
import UpdateInfo from './UpdateInfo';
import MatchWrapper from './MatchWrapper';

import { BrowserRouter as Router, Route} from "react-router-dom";
  
function Index() {
    return <UserDetails />;
};
  
function UpdateRegisteredUser() {
    return <UpdateInfo />;
};

function FindMatches() {
    return <MatchWrapper />;
};

function AppRouter() {       
    return (
        <Router>
            <div>
                <Route path="/loggedin/" exact component={Index} />
                <Route path="/loggedin/updateInfo/" exact component={UpdateRegisteredUser} />
                <Route path="/loggedin/findMatches/" exact component={FindMatches} />
            </div>
        </Router>
    );
};


export default AppRouter;