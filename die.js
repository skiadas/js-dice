let random = () => Math.random();

export function getRandom() {
  return random;
}
export function setRandom(newRandom) {
  random = newRandom;
}
export function resetRandom() {
  random = () => Math.random();
}

export function die(n, d) {
  return {
    roll: () => {
      let acc = 0;
      for (let i = 0; i < n; i++) acc += rollInteger(d);
      return acc;
    },
  };
}

function rollInteger(max) {
  return Math.floor(random() * max) + 1;
}
