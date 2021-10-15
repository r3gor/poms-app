import React, { useEffect, useState } from 'react'
import { useCountdown } from './useCountdown';

// const status = {  
//   TRABAJO: 1,
//   DESCANSO: 2,
//   PAUSA: 3,
//   TERMINADO: 4
// };

export const useTopicTimer = (poms) => {

  const { start, pause, reset, isOver, time } = useCountdown({ minutes: 30, seconds: 0 });
  const [status, setStatus] = useState('PAUSE');
  const [pomsDone, setPomsDone] = useState(0);

  useEffect(() => {

    if (time.minutes < 5)
      setStatus('DESCANSO');

    else
      setStatus('TRABAJO');

    if (isOver()) {
      reset();
      setPomsDone(poms + 1);
    }

  }, [time])

  useEffect(() => {

    if (pomsDone === poms)
      setStatus('TERMINADO');

  }, [poms])

  return { start, pause, time, status, pomsDone };
}
