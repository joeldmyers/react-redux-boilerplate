import { UPDATE_COUNTER_AMOUNT } from "../actions/counterAction";

const initialState = {
  counterCount: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNTER_AMOUNT:
      const { incrementAmount } = action.payload;
      return { ...state, number: state.counterCount + incrementAmount };

    default:
      return state;
  }
}
