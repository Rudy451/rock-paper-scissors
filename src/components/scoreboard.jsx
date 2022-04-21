export default function Scoreboard(props){
  return (
    <div className='scoreboard_heading'>
      <div className='scoreboard_rock-paper-scissors'/>
      <div className='scoreboard_scorebox'>
        <div className='scoreboard_scoretitle'>Score</div>
        <div className='scoreboard_scoretotal'>{props.score}</div>
      </div>
    </div>
  )
}
