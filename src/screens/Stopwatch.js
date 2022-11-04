//// Stopwatch.js - the actual stopwatch screen with interaction buttons
import { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import ButtonsContainer from '../components/ButtonsContainer';
import '../stylesheets/stopwatch.css';

const Stopwatch = () => {
    const [running, setRunning] = useState(false);
    const [paused, setPaused] = useState(true);
    const [time, setTime] = useState('');

    useEffect(() => {
        let interval = 0;

        if (running === true && paused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [running, paused])

    const startStopwatch = () => {
        setRunning(true);
        setPaused(false);
    }

    const pauseStopwatch = () => {
        setRunning(false);
        setPaused(true);
    }

    const resetStopwatch = () => {
        setRunning(false);
        setTime(0);
    }

    return (
        <div className='stopwatch'>
            <Timer time={time}/>

            <ButtonsContainer running={running} paused={paused} startStopwatch={startStopwatch} pauseStopwatch={pauseStopwatch} resetStopwatch={resetStopwatch}/>
        </div>
    )
}

export default Stopwatch;