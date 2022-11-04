//// Buttons.js - "buttons" component that controls the stopwatch
import Button from './Button';

const ButtonsContainer = ({ running, paused, startStopwatch, pauseStopwatch, resetStopwatch }) => {
    return (
        <div className="buttonsContainer">
            {running ?
                <div className='activeStopwatch'>
                    <Button onClick={resetStopwatch} type={"Reset"} />
                    {paused ?
                        <Button type={"Resume"} />
                        :
                        <Button onClick={pauseStopwatch} type={"Pause"} />}
                </div>
                :
                <div className='inactiveStopwatch'>
                    <Button onClick={startStopwatch} type={"Start"} />
                </div>
            }
        </div>
    )
}

export default ButtonsContainer;