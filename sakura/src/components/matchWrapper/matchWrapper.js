import React from "react";
import "./style.css";
import axios from 'axios';
import MatchCard from '../matchCard/matchCard';

export default class MatchWrapper extends React.Component {
    state = {
        matches: []
    }
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
        // this.setState({
        //     matches: res.data
        // })
   
        

    //    res.data.map(match=>(
    //         <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>
    //     ))

    }).catch(function(err){
        console.log(err);
    })

}
render(){
    return(
        <div className = 'cardWrapper'>
            <button className='match-load' onClick= {this.matchCall}> load potential matches </button>
            <div id="card-root"></div>
                {/* {this.state.matches.map(match=>(
                    <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>

                ))} */}
            </div>
    )
}




}
