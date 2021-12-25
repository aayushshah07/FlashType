import './App.css';
import Nav from './../Nav/Nav'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallegeSection from '../ChallengeSection/ChallengeSection';
import React from 'react'


const totalTime= 60
const url="http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectedParagraph: "Hello World!",
  testInfo: [],
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends React.Component {
  state={
    selectedParagraph:"Hi, I amd",
    timeStarted:false,
    timeRemaining : totalTime,
    words :0 ,
    characters : 0,
    wpm : 0,
    testInfo: []
  };
  
  componentDidMount(){
    fetch(url)
    .then((response) => response.text())
    .then((data) => {
      this.setState({selectedParagraph:data})
    });

    const selectedParagraphArray = this.state.selectedParagraph.split("");
    const testInfo =selectedParagraphArray.map(selectedLetter =>{
      return{
        testLetter :selectedLetter,
        status : "notAttempted",

      };
    });
    this.setState({testInfo : testInfo})
  }
  startAgain = () => this.fetchNewParagraphFallback();
  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
        if (this.state.timeRemaining > 0) {
            // Change the WPM and Time Remaining
            const timeSpent = totalTime - this.state.timeRemaining;
            const wpm =
                timeSpent > 0
                    ? (this.state.words / timeSpent) * totalTime
                    : 0;
            this.setState({
                timeRemaining: this.state.timeRemaining - 1,
                wpm: parseInt(wpm),
            });
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
handleUserInput = (inputValue) => {
  if (!this.state.timerStarted) this.startTimer();

 

  const characters = inputValue.length;
  const words = inputValue.split(" ").length;
  const index = characters - 1;

  if (index < 0) {
      this.setState({
          testInfo: [
              {
                  testLetter: this.state.testInfo[0].testLetter,
                  status: "notAttempted",
              },
              ...this.state.testInfo.slice(1),
          ],
          characters,
          words,
      });

      return;
  }

  if (index >= this.state.selectedParagraph.length) {
      this.setState({
          characters,
          words,
      });
      return;
  }

  // Make a copy
  const testInfo = this.state.testInfo;
  if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

  // Check for mistake
  const isMistake = inputValue[index] === testInfo[index].testLetter;

  // Update the testInfo
  testInfo[index].status = isMistake ? "correct" : "incorrect";

  // Update the state
  this.setState({
      testInfo,
      words,
      characters,
  });
};

  render(){
   
  return (
   <div className="app"> 
      {/* navSection */}
      <Nav></Nav>
      {/* landingPage */}

      <Landing></Landing>
      {/* Challenge Section */}
      <ChallegeSection 
         selectedParagraph={this.state.selectedParagraph}
         timeStarted={this.state.timeStarted}
         timeRemaining={this.state.timeRemaining}
         words={this.state.words}
         characters={this.state.characters}
         wpm={this.state.wpm}
         testInfo={this.state.testInfo}
         onInputChange={this.handleUserInput}
      ></ChallegeSection>
      {/* Footer */}
      <Footer></Footer>
   </div>
  );
  }
}

export default App;
