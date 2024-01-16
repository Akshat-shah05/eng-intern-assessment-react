import React, {useState, useEffect} from 'react'
import StopWatchButton from './components/StopWatchButton/StopWatchButton'
import StopWatch from './components/StopWatch/StopWatch'
import './app.css'
import CalculateTime from './helpers/CalcTime'
import Laps from './components/Laps/Laps'

export default function App() {
    // Keep track of each second
    const [timeSeconds, setTimeSeconds] = useState<number>(0);

    // Array of the times (set with the CalculateTime function)
    const [timerArray, setTimerArray] = useState<Array<number|string>>([])

    // Keeps track of all the laps --> For mapping over the lap component
    const [laps, setLaps] = useState<Array<string>>([])

    // Calculate the time based on the amount of seconds elapsed --> Save this as an array 
    // Take that array and set it to timerArray, this will be used to update our stopwatch each second
    useEffect(() => {
        let timeArray: Array<number|string> = CalculateTime(timeSeconds)
        setTimerArray(timeArray)
    }, [timeSeconds])

    return(
        <>
            <div className="body">
                <StopWatch timeSeconds={timeSeconds} timerArray={timerArray}/>
                <StopWatchButton timeSeconds={timeSeconds} timerArray={timerArray} setTimeSeconds={setTimeSeconds} setLaps={setLaps} laps={laps}/>
            </div>
            
            <h1> Laps </h1>
            {laps.map((lap, index) => (
                <Laps key={index} lap={lap}></Laps>
            ))}
        </>
    )
}