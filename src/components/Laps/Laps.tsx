import React from 'react'
import './laps.css'

type Props = {
    lap: string
}

const Laps = (props: Props) => {

    // Simple formatting of each lap from laps into the correct format
  return (
    <>
        <li className="lap-list">{`${props.lap[0]} : ${props.lap[1]} : ${props.lap[2]}`}</li>
    </>
  )
}

export default Laps