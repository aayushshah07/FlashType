import React from 'react';
import './TryAgain.css';
const TryAgain = ({words,characters,wpm,startAgain}) =>{
    const url = "aayushshah.com";
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container" onClick={()=>startAgain()}>
                <p>
                    <b>Characters : {characters}</b>
                </p>
                <p>
                    <b>Words : {words}</b>
                </p>
                <p>
                    <b>Speed: {wpm}</b>
                </p>
            </div>
            <div>
                <button className="end-buttons start-again-btn">Re-try</button>
                <button className="end-buttons share-btn"
                    onClick={()=>{
                        window.open("https://www.facebook.com/sharer/sharer.php?u="+url, "facebook-share-dialog", "width=800" ,"height=600")
                    }}
                >Share</button>

                <button className="end-buttons tweet-btn"
                    onClick={()=>{
                        window.open("https://wwww.tweeter.com")
                    }}
                >Tweet</button>
            </div>
        </div>
    );
}

export default TryAgain;