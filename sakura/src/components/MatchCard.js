import React from "react";

function MatchCard(props){
    return(
        <div className = "card" id={props.id} onClick={() => props.onClick(props.id)} >
            <h3>{props.userName}</h3>
            <span>{props.distance},</span>
            <span>{props.gender},</span> 
            <span>{props.summary}</span> 
        </div>
    )
}
export default MatchCard;