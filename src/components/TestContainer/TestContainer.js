import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
const TestContainer= ({selectedParagraph,timeStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange})=> {
    return(
        
        <div className="test-container">
            {
                
                timeRemaining > 0 ?
                (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer 
                    words={words} 
                    characters={characters}
                    wpm={wpm}
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timeStarted={timeStarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                    </div>
                ) :
                (
                    <div className="try-again-cont">
                    <TryAgain words={words} characters={characters} wpm={wpm}/>
                    </div> 
                )
            }
           
        </div>
    );
}

export default TestContainer;