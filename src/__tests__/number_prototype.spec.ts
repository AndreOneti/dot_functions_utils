import '../index';

describe('Date prototype test', () => {

  it('should return number and log on console', async () => {
    expect((25).log()).toBe(25);
  });

  it('should return number and log on console', async () => {
    expect((25).log("Number")).toBe(25);
  });

  it('should return string 01', async () => {
    expect((1).twoDigits()).toBe("01");
  });

  it('should return string 10', async () => {
    expect((10).twoDigits()).toBe("10");
  });

  it('should return string 100', async () => {
    expect((100).twoDigits()).toBe("100");
  });

  it('should return string 001', async () => {
    expect((1).threeDigits()).toBe("001");
  });

  it('should return string 010', async () => {
    expect((10).threeDigits()).toBe("010");
  });

  it('should return string 100', async () => {
    expect((100).threeDigits()).toBe("100");
  });

  it('should return string 1000', async () => {
    expect((1000).threeDigits()).toBe("1000");
  });

  it('should return string 1.000,00', async () => {
    expect((1000).format()).toBe("1.000,00");
  });
});
