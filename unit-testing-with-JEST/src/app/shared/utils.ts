export const calculateTotalSum = (prices: number[]): number => {
  return prices.reduce((total, current) => (total += current), 0);
};
