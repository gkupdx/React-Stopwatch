//// Timer.js - the 'timer' component that updates the time on the stopwatch screen

const Timer = ({ time }) => {
    return (
        <div className="timer">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            {("0" + ((time / 10) % 100)).slice(-2)}
        </div>
    )
}

export default Timer;