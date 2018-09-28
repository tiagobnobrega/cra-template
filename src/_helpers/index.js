//  Global helper functions. If needed, create more than one file for this. (Keep the code organized and DRY)
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const randomDelay = () => randomIntFromInterval(100, 500);
export const wait = (value, delay) => new Promise(resolve => setTimeout(resolve, delay || randomDelay(), value));
