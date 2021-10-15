import React, { useState } from 'react'

export const useCountdown = ({minutes, seconds}) => {

  const initialTime = {minutes, seconds};

  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState();

  const tick = () => {
    console.log('TICK');

    console.log(time)
    // debugger;

    // let {minutes: _minutes, seconds: _seconds} = time;

    let _minutes = time.minutes;
    let _seconds = time.seconds;

    _seconds -= 1;
  
    // if (_seconds < 0 && _minutes > 0) {
    //   _seconds = 59;
    //   _minutes -= 1;
    // }
    
    setTime({minutes: _minutes, seconds: _seconds});

  }

  const isOver = () => {
    console.log('IS OVER?');

    return (time.minutes === 0 && time.seconds === 0);

  }

  const start = () => {
    console.log('START');

    // debugger;

    // if (isOver()) return;

    // tick();
    setInterval(tick, 1000)
    // setTimer(setInterval(tick, 1000));

  }

  const pause = () => {
    console.log('PAUSE');
    clearInterval(timer);
  
  }

  const reset = () => {
    console.log('RESET');
    setTime(initialTime);

  }

  return {start, pause, reset, isOver, time};

}
