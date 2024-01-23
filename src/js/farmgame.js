const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}
const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const dubiousFood = changeState("soil");

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const hydroCannon = changeState("water")(10);
const itsWhatPlantsCrave = changeState("water")(-5);

export { storeState, stateControl, changeState, feed, blueFood, greenFood, dubiousFood, hydrate, superWater, hydroCannon, itsWhatPlantsCrave };

