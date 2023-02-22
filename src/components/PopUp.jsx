import React from 'react'
import './styles/PopUp.css'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            { props.children }
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Done</button>
        </div>    
    </div>
  ) : "";
}

export default PopUp