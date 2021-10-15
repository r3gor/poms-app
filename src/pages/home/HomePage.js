import Box from '@mui/material/Box';
import React from 'react';
import { getPlans, getSelectedPlanIndex } from '../../data/data';
import { PomTopicCard } from './PomTopicCard';

export const HomePage = () => {

  const planIndex = getSelectedPlanIndex();
  const plan = getPlans()[planIndex];

  if (planIndex == null) return <h5> No ha seleccionado ningun plan </h5>

  return (
    <div>
      <Box
        display='flex' justifyContent='center'
        flexWrap='wrap' gap={2}
      >

        {
          plan.topics.map((topic, index) => (
            <PomTopicCard key={index}
              title={topic.title}
              poms={topic.poms}
            />
          ))
        }

      </Box>
    </div>
  )
}
