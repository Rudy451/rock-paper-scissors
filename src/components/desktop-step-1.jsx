export default function StepOne(props){
  return(
    <div className={`stepone_layout ${props.userPick === undefined ? '' : 'step_invisible'}`}>
      <div className='stepone_triangle'>
        <div className='tophalf_triangle'>
          <button className='paper_container move_container' onClick={() => props.updateUserPick('paper')}/>
          <button className='scissors_container move_container' onClick={() => props.updateUserPick('scissors')}/>
        </div>
        <div className='bottomhalf_triangle'>
          <button className='rock_container move_container' onClick={() => props.updateUserPick('rock')}/>
        </div>
      </div>
      <div className='rules-box'>
        <button className='rules-button' onClick={() => props.updateModalVisibility(true)}>Rules</button>
      </div>
    </div>
  )
}
