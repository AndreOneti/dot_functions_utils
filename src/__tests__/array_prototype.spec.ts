import { waitFor } from '../index';

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
    expect(firstList.getMiddleElement()).toEqual(
      expect.arrayContaining(firstExpected)
    );
  });

  it('should return is numbers 2 and 3', async () => {
    expect(secondList.getMiddleElement()).toEqual(
      expect.arrayContaining(secondExpected)
    );
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

  it('should return array and log on console', async () => {
    expect([1].log()).toEqual([1]);
  });

  it('should return array and log on console', async () => {
    expect([1].log('Array')).toEqual([1]);
  });

  it('should return array afte execution', async () => {
    let time = 1;
    let array = [1, 2, 3];
    let timeInit = new Date().getTime();
    array.forEachSync(async (elemente) => {
      await waitFor(1);
      let timeNow = new Date().getTime();
      expect(timeInit - timeNow).toEqual(time);
      expect(elemente).toEqual(time);
      time++;
    });
  });

  it('should return array afte execution', async () => {
    let time = 1;
    let array = [1, 2, 3, 4, 5, 6];
    let timeInit = new Date().getTime();
    array.forEachSync(async (elemente) => {
      await waitFor(1);
      let timeNow = new Date().getTime();
      expect(timeInit - timeNow).toEqual(time);
      expect(elemente).toEqual(time);
      time++;
    });
  });

  it('should be equal', async () => {
    const array = [1, 2, 3];
    const arrayToCompare = [1, 2, 3];

    let isEquals = array.equals(arrayToCompare);
    expect(isEquals).toEqual(true);

    isEquals = array.equals(array);
    expect(isEquals).toEqual(true);

    isEquals = array.equals([1, 2, 3]);
    expect(isEquals).toEqual(true);
  });

  it('should be not equal', async () => {
    const array = [1, 2, 3];
    const arrayToCompare = [1, 2, 3, 4];

    let isEquals = array.equals(arrayToCompare);
    expect(isEquals).toEqual(false);

    isEquals = array.equals([1, 2, 3, 4]);
  });

  it('should array in array be equal', async () => {
    const array = ['andre', 'oneti', ['AndreOneti']];
    const arrayToCompare = ['andre', 'oneti', ['AndreOneti']];

    let isEquals = array.equals(arrayToCompare);
    expect(isEquals).toEqual(true);

    isEquals = array.equals(array);
    expect(isEquals).toEqual(true);

    isEquals = array.equals(['andre', 'oneti', ['AndreOneti']]);
    expect(isEquals).toEqual(true);
  });

  it('should array in array be not equal', async () => {
    const array = ['andre', 'oneti', ['AndreOneti', 'AndreOneti']];
    const arrayToCompare = ['andre', 'oneti', ['AndreOneti']];

    let isEquals = array.equals(arrayToCompare);
    expect(isEquals).toEqual(false);

    isEquals = array.equals(['andre', 'oneti', ['AndreOneti']]);
    expect(isEquals).toEqual(false);
  });

  it('should array not equal', async () => {
    const array = ['andre', 'oneti', ['AndreOneti']];
    const arrayToCompare = ['andre', 'oneti', ['andre']];

    let isEquals = array.equals(arrayToCompare);
    expect(isEquals).toEqual(false);

    isEquals = array.equals(['andre', 'oneti', ['andre']]);
    expect(isEquals).toEqual(false);
  });
});
