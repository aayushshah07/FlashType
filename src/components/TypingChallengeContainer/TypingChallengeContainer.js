import React from 'react';
import './TypingChallengeContainer.css'
import ChallegeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
const TypingChallengeContainer= ({selectedParagraph,timeStarted,timeRemaining,words,characters,wpm,testInfo, onInputChange}) =>{
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallegeDetailsCard cardname="Words" cardvalue={words}/>
                <ChallegeDetailsCard cardname="Characters" cardvalue={characters}/>
                <ChallegeDetailsCard cardname="Speed" cardvalue={wpm}/>
                
            </div>
            <div className="typerwriter-container">
            <TypingChallenge 
            selectedParagraph={selectedParagraph} 
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
            testInfo={testInfo}
            onInputChange={ onInputChange}
            />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;