let plans = [
  {
    planName: "My plan 1",
    topics: [
      { topicName: "My topic 1", poms: 3 },
      { topicName: "My topic 2", poms: 10 },
    ]
  },
  {
    planName: "My plan 2",
    topics: [
      { topicName: "Other topic 1", poms: 12 },
    ]
  }
];

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

const setPlans = (newVal) => { plans = newVal };
const setPlanInUse = (newVal) => { planInUse = newVal };
const setPlanState = (newVal) => { planState = newVal };

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
  const copyPlan = plans.slice();
  copyPlan.push(plan);
  setPlans(copyPlan);
}

const getPlans = () => {
  return plans;
}

const removePlan = () => {}

const getPlanState = () => {
  return planState;
}

const tickTopic = (indexTopic) => {

  const copyPlanState = [...planState];

  let time = copyPlanState[indexTopic].time;
  let pomsDone = copyPlanState[indexTopic].pomsDone;
  let pomsTotal = copyPlanState[indexTopic].poms;

  if (pomsDone === pomsTotal) return;

  time.s -= 1;

  if (time.s < 0) {
    time.s = 59;
    time.m -= 1;
  }

  if (time.s === 0 && time.m === 0) {
    pomsDone += 1;
    time.s = 0;
    time.m = 30;
  }

  copyPlanState[indexTopic].time = time;
  copyPlanState[indexTopic].pomsDone = pomsDone;

  setPlanState(copyPlanState);
}

const tick = (indexTopic) => {

  let timer;

  const play = () => {
    timer = setInterval()
  }

}

const newPlan = {
  planName: "My plan 3",
  topics: [
    { topicName: "Other topic 1", poms: 12 },
  ]
}

addPlan(newPlan);
console.log(getPlans());



