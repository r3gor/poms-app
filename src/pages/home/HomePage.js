import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { getPlans, getSelectedPlanIndex } from '../../data/data';
import { PomTopicCard } from './PomTopicCard'
import { useCountdown } from './useCountdown';

export const HomePage = () => {

  const planIndex = getSelectedPlanIndex();
  const plan = getPlans()[planIndex];
  const {start, pause, reset, isOver, time} = useCountdown({minutes: 10, seconds: 10});

  if (planIndex == null) return <h5> No ha seleccionado ningun plan </h5>


  return (
    <div>
      <Box
        display='flex' justifyContent='center'
        flexWrap='wrap' gap={2}
      >

        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
        
        <h1> {time.minutes} : {time.seconds} </h1>
        {/* {
          plan.topics.map((topic, index) => (
            <PomTopicCard key={index}
              title={topic.title}
              poms={topic.poms}
            />
          ))
        } */}

      </Box>
    </div>
  )
}
