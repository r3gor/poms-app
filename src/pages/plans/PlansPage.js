import React from "react";
import { PlanCard } from "./PlanCard";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
import { getPlans, setSelectedPlanIndex } from "../../data/Data";

export const PlansPage = () => {
  const history = useHistory();

  const plans = getPlans();

  const handleStartPlan = (index) => {
    setSelectedPlanIndex(index);
    history.push("/");
  };

  return (
    <Box display="flex" flexWrap="wrap" gap="10px">
      {plans.map(({ title, topics }, index) => {
        return (
          <div>
            <PlanCard
              key={index}
              startPlan={() => handleStartPlan(index)}
              planName={title}
              topics={topics}
            />
          </div>
        );
      })}
    </Box>
  );
};
