import updateLocalStorage from '../helpers/updateLocalStorage';

export const reducer = (
  state = {
    counter: 0,
  },
  action
) => {
  switch (action.type) {
    case 'counterPlus':
      const counterPlus = state.counter + 1;
      return { counter: counterPlus };
    case 'counterMinus':
      const counter = state.counter - 1;
      return { counter };

    default:
      return state;
  }
};
