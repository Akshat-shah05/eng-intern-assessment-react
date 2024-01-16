import React, {useState, useEffect} from 'react'
import './stopwatch.css'
import CalculateTime from '../../helpers/CalcTime';

type Props = {
    timeSeconds: number,
    timerArray: Array<number|string>
}

export default function StopWatch(props:Props) {
    
    // Displays the hours, minutes and seconds
    return(
        <section className="flex-container">
            <p className="timer-text">{props.timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{props.timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{props.timerArray[2]}</p>
        </section>
    )
}