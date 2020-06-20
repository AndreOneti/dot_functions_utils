import '../index';

describe('Date prototype test', () => {

  let obj = {
    name: "Jhon",
    lastName: "Doe"
  }

  it('should return object and log on console', async () => {
    expect(obj.log()).toEqual({ name: "Jhon", lastName: "Doe" });
  });

  it('should return object comparation', async () => {
    expect(obj.compare({ name: "Jhon", lastName: "Doe" })).toBe(true);
  });

  it('should return object comparation', async () => {
    expect(obj.compare({ name: "Jane", lastName: "Doe" })).toBe(false);
  });
});
