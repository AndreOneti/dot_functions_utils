import '../index';

describe('String prototype test', () => {

  it('should return is string equal 010', async () => {
    expect('10'.threeDigits()).toBe('010');
  });

  it('should return is string equal 001', async () => {
    expect('001'.threeDigits()).toBe('001');
  });

  it('should return is string equal 1000', async () => {
    expect('1000'.threeDigits()).toBe('1000');
  });

  it('should return is string equal 01', async () => {
    expect('1'.twoDigits()).toBe('01');
  });

  it('should return is string equal 11', async () => {
    expect('11'.twoDigits()).toBe('11');
  });

  it('should return string captalized', async () => {
    expect('my string'.captalize()).toBe('My string');
  });

  it('should return string captalized', async () => {
    expect('string'.captalize()).toBe('String');
  });

  it('should return all strings captalized', async () => {
    expect('my string'.captalizeAll()).toBe('My String');
  });

  it('should return all strings captalized', async () => {
    expect('string'.captalizeAll()).toBe('String');
  });

  it('should return all strings captalized', async () => {
    expect('my string'.splitToArray(3)).toEqual(expect.arrayContaining(['my ', 'str', 'ing']));
  });

  it('should return all strings captalized', async () => {
    expect('string'.splitToArray(3)).toEqual(expect.arrayContaining(['str', 'ing']));
  });

  it('should return all strings captalized', async () => {
    expect(''.splitToArray(3)).toEqual(expect.arrayContaining([]));
  });

});
