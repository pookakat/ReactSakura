import React from "react";
import "./style.css";
import axios from 'axios';
import matchCard from '../matchCard/matchCard';

export default class MatchWrapper extends React.Component {
matchCall = ()=>{
    // event.preventDefault();
    let route;
    if(window.location.href.includes('local')){
         route = "http://localHost:3001/api/search"
    } else {
       route = "/api/search";
    }
    axios.get(route)
    .then((res)=>{
        console.log(res);
        this.state = {
            matches: res
        }
    })

}
render(){
    return(
        <div className = 'cardWrapper' onLoad = {this.matchCall}>
            <div>
                {state.matches.map(match=>(
                    <MatchCard key= {match.id} id={match.id} userName={match.userName} distance = {'unknown distance'} gender = {match.gender} summary = {match.intro}></MatchCard>

                ))}
            </div>


        </div>
    )
}




}
