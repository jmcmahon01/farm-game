import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {
  storeState,
  stateControl,
  changeState,
  feed,
  blueFood,
  greenFood,
  dubiousFood,
  hydrate,
  superWater,
  hydroCannon,
  itsWhatPlantsCrave,
} from ('farmgame.js');


window.onload = function () {
  document.getElementById('feed').onclick = function () {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('show-state').onclick = function () {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  };
};

import {
  storeState,
  stateControl,
  changeState,
  feed,
  blueFood,
  greenFood,
  dubiousFood,
  hydrate,
  superWater,
  hydroCannon,
  itsWhatPlantsCrave,
} from ('./farmgame.js');




