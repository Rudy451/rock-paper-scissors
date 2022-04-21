export default function RulesModal(props) {

  return (
    <div className={`rules-modal__box ${props.modalVisibility ? 'modal_visible' : 'modal_invisible'}`}>
      <div className='rules-modal__header'>
        <div>RULES</div>
        <button className='rules-modal__close' onClick={() => props.updateModalVisibility(!props.modalVisibility)}/>
      </div>
      <div className='image_rules'/>
    </div>
  )
}
