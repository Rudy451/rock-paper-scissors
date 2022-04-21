import {useState} from 'react';
import './App.css';
import RulesModal from './components/rules-modal';
import Scoreboard from './components/scoreboard';
import StepOne from './components/desktop-step-1';
import StepTwo from './components/desktop-step-2';
import StepThree from './components/desktop-step-3';

function App() {

  const [modalVisibility, updateModalVisibility] = useState(false);
  const [userPick, updateUserPick] = useState(undefined);
  const [computerPick, updateComputerPick] = useState(undefined);
  const [winner, updateWinner] = useState(undefined);
  const [score, updateScore] = useState(0);

  return (
    <div className='game-background'>
      <Scoreboard score={score} updateScore={updateScore}/>
      <RulesModal modalVisibility={modalVisibility} updateModalVisibility={updateModalVisibility}/>
      <StepOne modalVisibility={modalVisibility} updateModalVisibility={updateModalVisibility} userPick={userPick} updateUserPick={updateUserPick}/>
      <StepTwo userPick={userPick} computerPick={computerPick} updateComputerPick={updateComputerPick} winner={winner} updateWinner={updateWinner}/>
      <StepThree userPick={userPick} updateUserPick={updateUserPick} computerPick={computerPick} updateComputerPick={updateComputerPick} winner={winner} updateWinner={updateWinner} score={score} updateScore={updateScore}/>
    </div>
  );
}

export default App;
