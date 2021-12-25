import React from 'react';
import './TypingChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge= ({timeStarted,timeRemaining,words,characters,wpm,testInfo, onInputChange})=>{
    // console.log(testInfo)
    return(

        <div className="TypingChallenge">
            <div className="timer-container">
                <p className="timer">
                00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>              
                <p className="timer-info">
                {!timeStarted && " Start Typing To Start The Test"}
               
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                   {
                        testInfo.map((individualLetterInfo,index) => {
                            return <TestLetter
                            key={index}
                             individualLetterInfo={individualLetterInfo}
                             />
                        })
                    }
                </div>
                <div className="textarea-right">
                    <textarea 
                    className="textarea" 
                    placeholder="Start Typing Here"
                    onChange={(e) => onInputChange(e.target.value)}
                    >
                    
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;