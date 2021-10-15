import React from 'react'
import { PlanCard } from './PlanCard'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router'
import { setSelectedPlanIndex } from '../../data/data'

export const PlansPage = () => {

  const history = useHistory()

  const plans = JSON.parse(localStorage.getItem('plans'))

  const handleStartPlan = (index) => {
    setSelectedPlanIndex(index)
    history.push('/')
  }

  return (
    <Box display='flex' flexWrap='wrap' gap='10px'>
      {
        plans.map(({title, topics}, index) => {
          return (
          <PlanCard key={index}
            startPlan={() => handleStartPlan(index)}
            planName={title} 
            topics={topics}
          />
        )})
      }
    </Box>
  )
}
