import React from 'react'
import { PlanCard } from './PlanCard'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router'

export const PlansPage = () => {

  const history = useHistory()

  const plans = JSON.parse(localStorage.getItem('plans'))
  const keys = Object.keys(plans);

  const startPlan = (planName) => {
    localStorage.setItem('activePlan', planName);
    history.push('/')
  }

  return (
    <Box display='flex' flexWrap='wrap' gap='10px'>
      {
        keys.map((k, index) => {
          return (
          <PlanCard key={index}
            startPlan={startPlan}
            planName={k} 
            topics={plans[k]}
          />
        )})
      }
    </Box>
  )
}
