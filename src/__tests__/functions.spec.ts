import { threeDigits, twoDigits } from '../index';

describe('Functions test', () => {

  it('should return is string equal 010', async () => {
    expect(threeDigits(10)).toBe('010');
  });

  it('should return is string equal 1000', async () => {
    expect(threeDigits(1000)).toBe('1000');
  });

  it('should return is string equal 001', async () => {
    expect(threeDigits(1)).toBe('001');
  });

  it('should return is string equal 01', async () => {
    expect(twoDigits(1)).toBe('01');
  });

  it('should return is string equal 11', async () => {
    expect(twoDigits(11)).toBe('11');
  });

});
