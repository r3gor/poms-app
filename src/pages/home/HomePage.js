import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { PomTopicCard } from './PomTopicCard'

export const HomePage = () => {

  const planName = localStorage.getItem('activePlan');
  const plans = JSON.parse(localStorage.getItem('plans'));
  const topicsData = plans[planName];

  const [topicsPlanState, setTopicsPlanState] = useState(() => (
    topicsData.map((topic) => ({
      ...topic,
      time: {
        m: 30,
        s: 0,
      },
      pomsDone: 0,
    })
    )
  ))

  const tickTopic = (indexTopic) => {

    const copyTopicsPlanState = [...topicsPlanState];

    let time = copyTopicsPlanState[indexTopic].time;
    let pomsDone = copyTopicsPlanState[indexTopic].pomsDone;
    let pomsTotal = copyTopicsPlanState[indexTopic].poms;

    if (pomsDone === pomsTotal) return;

    time.s -= 1;

    if (time.s < 0) {
      time.s = 59;
      time.m -= 1;
    }

    if (time.s === 0 && time.m === 0) {
      pomsDone += 1;
      time.s = 0;
      time.m = 30;
    }

    copyTopicsPlanState[indexTopic].time = time;
    copyTopicsPlanState[indexTopic].pomsDone = pomsDone;

    setTopicsPlanState(copyTopicsPlanState);
  }

  return (
    <div>
      <Box
        display='flex' justifyContent='center'
        flexWrap='wrap' gap={2}
      >
        {
          topicsPlanState.map((topic, index) => (
            <PomTopicCard key={index}
              handleTicks={() => tickTopic(index)}
              title={topic.title}
              poms={topic.poms}
              pomsDone={topic.pomsDone}
              time={topic.time}
            />
          ))
        }
      </Box>
    </div>
  )
}
