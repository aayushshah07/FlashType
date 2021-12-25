import React from 'react'
import './ChallengeDetailsCard.css'
const ChallegeDetailsCard= ({cardvalue,cardname})=>{

    return(
        <div className="details-card-container">
            <div className="card-name">{cardname}</div>
            <div className="card-value">{cardvalue}</div>
        </div>
    );
}

export default ChallegeDetailsCard;