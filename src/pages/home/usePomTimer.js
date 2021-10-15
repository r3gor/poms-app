// import React from 'react'

// function subtractSecond(time){
  
//   const {m: minutes, s: seconds} = time;

//   if (seconds === 0 && minutes === 0) return time;
  
//   seconds -= 1;

//   if (seconds < 0 && minutes > 0) {
//     seconds = 59;
//     minutes -= 1;
//   }

//   return time;
// }

// // const status = {  
// //   TRABAJO: 1,
// //   DESCANSO: 2,
// //   PAUSA: 3,
// //   TERMINADO: 4
// // };

// export const useTopicTimer = (topics) => {

//   const [topicTimers, setTopicTimers] = useState(() => (
//     topics.map((topic) => ({
//       time: { m: 30, s: 0 },
//       pomsDone: 0,
//       status: 'PAUSE',
//     }))
//   ))

//   const tickTimer = (topicIndex) => {

//     const copyTopicTimers = [...topicTimers];

//     let { time, pomsDone, status } = copyTopicsPlanState[indexTopic];
//     const { poms: pomsTotal } = topics[indexTopic];

//     if (status == 'TERMINADO' || status == 'PAUSA') return;

//     time = subtractSecond(time);

//     if (time.m === 0 && time.s === 0){
//       pomsDone += 1;
//       time = {m: 30, s: 0};
//     }
    
//     if (pomsDone == pomsTotal)
//       status = 'TERMINADO';

//     copyTopicTimers[indexTopic] = {time, pomsDone, status};

//     setTopicsPlanState(copyTopicsPlanState);
  
//   }

//   const setStatus = (index, status) => {
//     const copyTopicTimers = [...topicTimers];
//     copyTopicTimers[index].status = status;
//     setTopicTimers(copyTopicTimers);
//   }

//   const start = (index) => {

//     if (status == 'TERMINADO') return
    
//     setStatus(index, '')
    

//   }

// }
