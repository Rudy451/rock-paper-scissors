import { EndOfLineState } from "typescript";

export default function StepTwo(props){
  function setAlert(props){
    const choices = props.userPick === 'paper' ? ['scissors', 'rock'] : props.userPick === 'scissors' ? ['paper', 'rock'] : ['paper', 'scissors'];
    setTimeout(() => {
      const computerChoice = choices[Math.round(Math.random() * 1)]
      props.updateComputerPick(computerChoice);
      props.updateWinner(
        (props.userPick === 'paper' && computerChoice === 'rock') ||
        (props.userPick === 'scissors' && computerChoice === 'paper') ||
        (props.userPick === 'rock' && computerChoice === 'scissors') ?
        'user' :
        'computer');
      const element = document.getElementsByClassName('steptwo_layout');
      element[0].classList.add('step_invisible');
    }, 3500);
    setTimeout(() => {
      const element = document.getElementsByClassName('steptwo_layout');
      element[0].classList.remove('step_visible');
    }, 5000);
  }

  props.userPick !== undefined && props.computerPick === undefined && setAlert(props);

  return(
    <div className={`steptwo_layout ${props.userPick === undefined ? '' : 'step_visible'}`}>
      <div className='result_breakdown'>
        <div className='result-detail_breakdown'>
          <div className='result-text'>
            <text>YOU PICKED</text>
          </div>
          <div className={`${props.userPick === 'paper' ? 'paper_container': props.userPick === 'scissors' ? 'scissors_container': 'rock_container'} user-result_container result_background-size`}/>
        </div>
        <div className='result-detail_breakdown'>
          <div className='result-text'>
            <text>THE HOUSE PICKED</text>
          </div>
          <div className='pending_container'/>
        </div>
      </div>
    </div>
  )
}
