export default function StepThree(props){

  function resetGame() {
    const element = document.getElementsByClassName('stepthree_layout');
    element[0].classList.add('step_invisible');
    setTimeout(() => {
      props.updateUserPick(undefined);
      props.updateComputerPick(undefined);
      props.updateWinner(undefined);
      props.updateScore(props.winner === 'user' ? props.score + 1 : props.score);
      element[0].classList.remove('step_visible');
    }, 500);
  }

  return(
    <div className={`stepthree_layout ${props.computerPick === undefined ? '' : 'step_visible'}`}>
      <div className='result_breakdown'>
        <div className='result-detail_breakdown'>
          <div className='result-text'>
            <text>YOU PICKED</text>
          </div>
          <div className={`${props.winner === 'user' ? 'result_winner-background' : ''}`}>
            <div className={`${props.userPick === 'paper' ? 'paper_container': props.userPick === 'scissors' ? 'scissors_container': 'rock_container'} user-result_container result_background-size`}/>
          </div>
        </div>
        <div className='result_message'>
          <div>{props.winner === 'user' ? 'YOU WIN' : 'YOU LOSE'}</div>
          <button className={`result_play-again ${props.winner === 'user' ? '' : 'result_play-again-loser'}`} onClick={() => resetGame()}>Play Again</button>
        </div>
        <div className='result-detail_breakdown'>
          <div className='result-text'>
            <text>THE HOUSE PICKED</text>
          </div>
          <div className={`${props.winner === 'computer' ? 'result_winner-background' : ''}`}>
            <div className={`${props.computerPick === 'paper' ? 'paper_container': props.computerPick === 'scissors' ? 'scissors_container': 'rock_container'} user-result_container result_background-size`}/>
          </div>
        </div>
      </div>
    </div>
  )
}
