import { calculateTotalSum } from './utils';

describe('utils', () => {
  describe('calculateTotalSum', () => {
    it('should return correct total sum', () => {
      const prices = [10, 20];
      expect(calculateTotalSum(prices)).toEqual(30);
    });
  });
});
