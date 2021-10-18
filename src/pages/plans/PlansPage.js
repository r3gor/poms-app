import React, { useState } from "react";
import { PlanCard } from "./PlanCard";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
import { LS_deletePlan, LS_getPlans, LS_setSelectedPlanIndex } from "../../data/Data";

export const PlansPage = () => {
  const history = useHistory();

  const [plans, setPlans] = useState(LS_getPlans());

  const handleStartPlan = (index) => {
    LS_setSelectedPlanIndex(index);
    history.push("/");
  };

  const handleDetelePlan = (index) => {
    LS_deletePlan(index);
    setPlans(LS_getPlans());
  }

  return (
    <Box display="flex" flexWrap="wrap" gap="10px">
      {plans.map(({ title, topics }, index) => {
        return (
          <div key={index}>
            <PlanCard
              startPlan={() => handleStartPlan(index)}
              deletePlan={() => handleDetelePlan(index)}
              planName={title}
              topics={topics}
            />
          </div>
        );
      })}
    </Box>
  );
};
