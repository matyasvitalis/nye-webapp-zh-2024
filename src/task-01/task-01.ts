type Input = Array<any>;

export const arraySum = (input: Input): number => {
  let sum = 0;
  input.forEach(item => {
      if (Array.isArray(item)) {
          sum += arraySum(item);
      } else if (typeof item === 'number' && Number.isInteger(item)) {
          sum += item;
      }
  });
  return sum;
};
