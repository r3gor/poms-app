let plans = {
  "My plan 1": {
    planName: "My plan 1",
    topics: {
      "My topic 1": { topicName: "My topic 1", poms: 3 },
      "My topic 2": { topicName: "My topic 2", poms: 10 },
    }
  },
  "My plan 2": {
    planName: "My plan 2",
    topics: {
      "Other topic 1": { topicName: "Other topic 1", poms: 12 },
    }
  }
};

let planInUse = "My plan 1";

const TRABAJO = 1,
  DESCANSO = 2,
  PAUSA = 3,
  TERMINADO = 4;

let planState = {
  title: 'My plan 1',
  topicsState: {
    "My topic 1": {
      pomsDone: 2,
      time: { m: '10', s: '04' },
      status: TRABAJO,
    },
    "My topic 2": {
      pomsDone: 0,
      time: { m: '30', s: '00' },
      status: PAUSA,
    }
  }
};

setUserPlans = (newVal) => {plans = newVal};
setPlanInUse = (newVal) => {planInUse = newVal};
setPlanState = (newVal) => {planState = newVal};

/* 
Create Page
  - addPlan

Plans page
  - getPlans
  - removePlan

Home page
  - getTopicsState
  - tick
  - 
*/

const addPlan = (plan) => {
  setUserPlans(...plans, plan);
}

const getPlans = () => {
  return plans;
}

// const getPlanByName = (name) => {
//   return plans[name];
// }

console.log(getPlans());
console.log(getPlanByName('My plan 1'));



