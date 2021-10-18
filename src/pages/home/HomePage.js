import Box from "@mui/material/Box";
import React from "react";
import { LS_getPlans, LS_getSelectedPlanIndex } from "../../data/Data.js";
import { PomTopicCard } from "./PomTopicCard";

export const HomePage = () => {
  const planIndex = LS_getSelectedPlanIndex();
  const plan = LS_getPlans()[planIndex];

  if (planIndex == null) return <h3> No ha seleccionado ningun plan </h3>;

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
      {plan.topics.map((topic, index) => (
        <PomTopicCard key={index} title={topic.title} poms={topic.poms} />
      ))}
    </Box>
  );
};
