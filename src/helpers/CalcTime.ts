
// The function takes the total number of seconds elapsed, and converts it into the hours, minutes, and seconds format (as an array of numbers)
function CalculateTime (timeSeconds: number): Array<number|string> {
    // First we determine the number of hours by dividing the time in seconds by 3600
    let hours: number = Math.floor(timeSeconds/3600);

    // We then determine the minutes by removing the amount of minutes that went into the hours
    let minutes: number = Math.floor((timeSeconds - (hours * 3600))/60);

    // We then determine the seconds by removing the amount of seconds that went into full minutes AND hours
    let seconds: number = timeSeconds - (hours * 3600) - (minutes * 60);

    // Determining when to add a 0 before the hours based on a ternary
    let hFormat = hours < 10 ? `0${hours}` : hours;
    let mFormat = minutes < 10 ? `0${minutes}` : minutes;
    let sFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
        hFormat,
        mFormat,
        sFormat
    ]

}  

export default CalculateTime;