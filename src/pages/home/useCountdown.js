import React, { useState } from 'react'

export const useCountdown = ({minutes, seconds}) => {

  const initialTime = {minutes, seconds};

  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState(false);

  const tick = () => {

    setTime((time) => {

      let { minutes, seconds } = time;

      seconds -= 1;

      if (seconds < 0 && minutes > 0) {
        seconds = 59;
        minutes -= 1;
      }

      return { minutes, seconds }
    })

  }

  const timerAlive = () => {
    return !!timer;
  }

  const isOver = () => {
    return (time.minutes === 0 && time.seconds === 0);
  }

  const start = () => {
    if (isOver() || timerAlive()) return;

    tick();
    setTimer(setInterval(tick, 10));
  }

  const pause = () => {
    clearInterval(timer);
    setTimer(false);
  }

  const reset = () => {
    setTime(initialTime);
  }

  return { start, pause, reset, isOver, timer, time };

}
