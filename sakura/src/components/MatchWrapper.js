import React from "react";
import axios from 'axios';
//import MatchCard from './MatchCard';

export default class MatchWrapper extends React.Component {
    state = {
        matches: []
    };

    goToDetails(){
        window.location.assign("/loggedin/");  
    };


    matchCall = (event)=>{
        event.preventDefault();
        console.log('match call function activated');
        let route;
        if(window.location.href.includes('local')){
            route = "http://localHost:3001/api/all"
        } else {
        route = "/api/all";
        }
        console.log(route);

        axios.get(route).then(function(res){
            console.log(res.data);
        /*    this.setState({
                 matches: res.data
             })
    
            

            res.data.map(match=>(
                 <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>
             ))
        */
        }).catch(function(err){
            console.log(err);
        })

    };

    render(){
        return(
            <div id="match-wrapper" className="about-us cardWrapper">
                <h3>Your Potential Matches:</h3>
                <hr />
                <button className="btn btn-lg mr-2 register-button" onClick= {this.matchCall}>Load Potential Matches</button>
                <button className="btn btn-lg mr-2 register-button" onClick= {this.goToDetails}>Cancel</button>
                <div id="card-root">
                    {/*{this.state.matches.map(match=>(
                        <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>

                    ))}*/}
                </div>
            </div>
        );
    };

   
    
}
