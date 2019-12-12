import React from 'react'

function Input(props) {
    return (
        <div className="timerContainer">
            <div className="digits">
            <div className="hour">
              <p className="hourDigit"> {('0'+Math.floor((props.item)/3600)).slice(-2)}</p>
            </div>
            <div className="minutes">
                <p className="dots">:</p>
              <p className="minuteDigit"> {('0'+Math.floor(((props.item)%3600)/60)).slice(-2)}</p>
            </div>
            <div className="seconds">
                <p className="dots">:</p>
              <p className="secondDigit">{('0'+Math.floor((props.item)%60)).slice(-2)}</p>
             </div>
             </div>
             <div className="labels">
                 <p className="hourtxt">Hour</p>
                 <p className="minutetxt">Minutes</p>
                 <p className="secondtxt">Seconds</p>
             </div>
        </div>
    )
}

export default Input
