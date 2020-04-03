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
    expect('my string'.capalize()).toBe('My string');
  });

  it('should return string captalized', async () => {
    expect('string'.capalize()).toBe('String');
  });

  it('should return all strings captalized', async () => {
    expect('my string'.capalizeAll()).toBe('My String');
  });

  it('should return all strings captalized', async () => {
    expect('string'.capalizeAll()).toBe('String');
  });

});