import React, {useState} from 'react'
import './StopWatchButton.css'

// Prop types
type Props = {
    setTimeSeconds: Function
    setLaps: Function
    timeSeconds: number
    laps: Array<string>
    timerArray: Array<number|string>
}

export default function StopWatchButton(props: Props) {

    // InterID for stopping timer
    const { setTimeSeconds } = props
    const [interID, setInterID] = useState<number>(0);

    // Function for starting
    const handleStart = () => {
        let interval:any = setInterval(() => {
            // make sure we're not directly mutative state
            setTimeSeconds((prev:number) => prev + 1)
        }, 1000)

        setInterID(interval)
    }

    // Function for stopping - works by clearing the interval
    const handleStop = () => {
        clearInterval(interID)
    }

    // Resets the stopwatch by setting to 0 and clearing interval
    const handleReset = () => {
        clearInterval(interID)
        setTimeSeconds(0)
    }

    // Adds a new lap to the lap array, which is then rendered by the lap component
    const handleLaps = () => {
        const lapTime = props.timerArray
        props.setLaps((prevLaps:any) => [...prevLaps, lapTime])
    }

    return(
        <section className="button-row">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLaps}>Laps</button>
        </section>
    )
}