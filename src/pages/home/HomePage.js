import Box from "@mui/material/Box";
import React from "react";
import { getPlans, getSelectedPlanIndex } from "../../data/Data";
import { PomTopicCard } from "./PomTopicCard";

export const HomePage = () => {
  const planIndex = getSelectedPlanIndex();
  const plan = getPlans()[planIndex];

  console.log('Homepage')

  if (planIndex == null) return <h3> No ha seleccionado ningun plan </h3>;

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
      {plan.topics.map((topic, index) => (
        <PomTopicCard key={index} title={topic.title} poms={topic.poms} />
      ))}
    </Box>
  );
};
