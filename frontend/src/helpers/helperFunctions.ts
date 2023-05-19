export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function fillArray(totalNumber: number) : Array<number> {
  return Array.from(Array(totalNumber), (_, index) => index + 1);
};
