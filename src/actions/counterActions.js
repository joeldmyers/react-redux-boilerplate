const updateCounterAmount = (incrementAmount) => ({
  type: "UPDATE_COUNTER_AMOUNT",
  payload: {
    incrementAmount,
  },
});

export default {
  updateCounterAmount,
};
