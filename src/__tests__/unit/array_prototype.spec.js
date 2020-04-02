require('../../../dist/index');

describe('Array tests', () => {
  const firstList = [1, 2, 3];
  const firstExpected = [2];
  const secondList = [1, 2, 3, 4];
  const secondExpected = [2, 3];

  it('should return is number 1', async () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].getFirstElement()).toBe(1);
  });

  it('should return is number 10', async () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].getLastElement()).toBe(10);
  });

  it('should return is number 2', async () => {
    expect(firstList.getMiddleElement()).toEqual(expect.arrayContaining(firstExpected));
  });

  it('should return is numbers 2 and 3', async () => {
    expect(secondList.getMiddleElement()).toEqual(expect.arrayContaining(secondExpected));
  });

  it('should return is number 1', async () => {
    expect([].getFirstElement()).toBe(null);
  });

  it('should return is number 10', async () => {
    expect([].getLastElement()).toBe(null);
  });

  it('should return is number 2', async () => {
    expect([].getMiddleElement()).toEqual(null);
  });

});
