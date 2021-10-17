import { useEffect, useState } from "react";
import { useCountdown } from "./useCountdown";

export const useTopicTimer = (poms) => {
  const { start, pause, reset, isOver, timer, time } = useCountdown({
    minutes: 30,
    seconds: 0,
  });
  const [status, setStatus] = useState("PAUSE");
  const [pomsDone, setPomsDone] = useState(0);
  
  useEffect(() => {
    if (status !== "TERMINADO") {
      setStatus(time.minutes < 5 ? "DESCANSO" : "TRABAJO");

      if (isOver()) setPomsDone((pomsDone) => pomsDone + 1);
    }
  }, [time]);
  
  useEffect(() => {
    if (!timer && status !== "TERMINADO") setStatus("PAUSA");
  }, [timer]);

  useEffect(() => {
    if (pomsDone === poms) {
      setStatus("TERMINADO");
      pause();
    } else reset();
  }, [pomsDone]);

  return { start, pause, time, status, pomsDone };
};
