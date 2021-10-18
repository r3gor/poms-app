// TODO: use id instead of array index

export const LS_getPlans = () => {
  return JSON.parse(localStorage.getItem("plans")) || [];
};

export const LS_setPlans = (plans) => {
  localStorage.setItem("plans", JSON.stringify(plans));
}

export const LS_setSelectedPlanIndex = (index) => {
  localStorage.setItem("planSelected", parseInt(index));
};

export const LS_addNewPlan = (plan) => {
  const plans = LS_getPlans();
  plans.push(plan);
  LS_setPlans(plans);
};

export const LS_getSelectedPlanIndex = () => {
  const index = localStorage.getItem("planSelected");
  return index != null ? parseInt(index) : null;
};

export const LS_deletePlan = (index) => {
  const plans = LS_getPlans();
  plans.splice(index, 1);
  LS_setPlans(plans);

  const sidx = LS_getSelectedPlanIndex();
  if (sidx > index)
    LS_setSelectedPlanIndex(sidx - 1);
  if (sidx == index)
    localStorage.removeItem('planSelected');
}
