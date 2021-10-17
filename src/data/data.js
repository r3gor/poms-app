export const addNewPlan = (plan) => {
  const plans = JSON.parse(localStorage.getItem("plans")) || [];
  plans.push(plan);
  localStorage.setItem("plans", JSON.stringify(plans));
};

export const getPlans = () => {
  return JSON.parse(localStorage.getItem("plans"));
};

export const setSelectedPlanIndex = (index) => {
  localStorage.setItem("planSelected", parseInt(index));
};

export const getSelectedPlanIndex = () => {
  const index = parseInt(localStorage.getItem("planSelected"));
  return index != null ? index : false;
};
