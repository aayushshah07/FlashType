import React from 'react';
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer';
const ChallegeSection = ({selectedParagraph,timeStarted,timeRemaining,words,characters,wpm,testInfo, onInputChange}) =>{
    return(
        <div className="challenge-section-container">
            <h1 className="challenge-section-header" data-aos="fade-down">
                Take  A Speed Test Now !!
            </h1>
            <TestContainer words={words} characters={characters} wpm={wpm} selectedParagraph={selectedParagraph} 
            timeRemaining={timeRemaining} timeStarted={timeStarted}
            testInfo={testInfo}
            onInputChange={onInputChange}
            />
        </div>
    );
}

export default ChallegeSection;