export const plansReducer = (state, action) => {

  switch (action.type) {

    case 'add':
      const copy = [...state];
      copy.push(action.payload);
      return copy;

    default:
      return state;

  }
}
