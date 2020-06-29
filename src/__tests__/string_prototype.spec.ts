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

  it('should return encoded strings', async () => {
    expect('Hello World!'.encodeBase64()).toBe('SGVsbG8gV29ybGQh');
  });

  it('should return dencoded strings', async () => {
    expect('SGVsbG8gV29ybGQh'.decodeBase64()).toBe('Hello World!');
  });

  it('should return decapitalizede string', async () => {
    expect('Andre Carvalho'.decapitalize()).toBe('andre Carvalho');
  });

  it('should return decapitalizede string', async () => {
    expect('ANDRE Carvalho'.decapitalize()).toBe('aNDRE Carvalho');
  });

  it('should return "hello world" as reversed string', async () => {
    expect("hello world".reverse()).toBe("dlrow olleh");
  });

  it('should return string', async () => {
    expect("hello world".toJson()).toBe("hello world");
  });

  it('should return object', async () => {
    expect('{ "name": "John Doe" }'.toJson()).toEqual({ "name": "John Doe" });
  });

  it('should return string and log on console', async () => {
    expect('Hello wolrd'.log()).toBe("Hello wolrd");
  });
});

it('should return string and log on console', async () => {
  expect('Hello wolrd'.log("OK")).toBe("Hello wolrd");
});
