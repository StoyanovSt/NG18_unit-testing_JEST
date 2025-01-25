import { calculateTotalSum } from './utils';

describe('utils', () => {
  describe('calculateTotalSum', () => {
    it('should return correct total sum', () => {
      expect(calculateTotalSum([10, 20])).toEqual(30);
    });
  });
});
