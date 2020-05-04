import '../index';

describe('Date prototype test', () => {

  let dateNow = new Date(2020, 3, 23);

  it('should return is string equal Thursday', async () => {
    expect(dateNow.getWeekDay()).toBe('Thursday');
  });

  it('should return is string equal Thursday', async () => {
    expect(dateNow.getWeekDay('en')).toBe('Thursday');
  });

  it('should return is string equal Quinta', async () => {
    expect(dateNow.getWeekDay('pt-br')).toBe('Quinta');
  });

  it('should return is string equal Jueves', async () => {
    expect(dateNow.getWeekDay('es')).toBe('Jueves');
  });

  dateNow = new Date;

  it('should return is Date equal firt day of week', async () => {
    expect(dateNow.getWeekBegin().toLocaleString()).toBe((new Date(dateNow.setDate(dateNow.getDate() - dateNow.getDay()))).toLocaleString());
  });

  dateNow = new Date;

  it('should return is Date equal last day of week', async () => {
    expect(dateNow.getWeekEnd().toLocaleString()).toBe((new Date(dateNow.setDate(dateNow.getDate() - dateNow.getDay() + 6))).toLocaleString());
  });

  dateNow = new Date;

  it('should return is Date equal firt day of month', async () => {
    expect(dateNow.getFirstDay().toLocaleString()).toBe((new Date(dateNow.getFullYear(), dateNow.getMonth(), 1)).toLocaleString());
  });

  dateNow = new Date;

  it('should return is Date equal last day of month', async () => {
    expect(dateNow.getLastDay().toLocaleString()).toBe((new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0)).toLocaleString());
  });

  dateNow = new Date;

  it('should return is Date equal today plus 15 day', async () => {
    expect(dateNow.nextDay(7).toLocaleString()).toBe((new Date(dateNow.setDate(dateNow.getDate() + 7))).toLocaleString());
  });

  dateNow = new Date;

  it('should return is Date equal today less 15 day', async () => {
    expect(dateNow.backDay(15).toLocaleString()).toBe((new Date(dateNow.setDate(dateNow.getDate() - 15))).toLocaleString());
  });

  dateNow = new Date;

  const expected = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  it('should return is String on format "yyyy-mm-dd"', async () => {
    expect(dateNow.format()).toEqual(expect.stringMatching(expected));
  });

  it('should return is String on format "yyyy-mm-dd"', async () => {
    expect(dateNow.format('yyyy-mm-dd')).toEqual(expect.stringMatching(expected));
  });

  const expectedReverse = /[0-9]{2}-[0-9]{2}-[0-9]{4}/;
  it('should return is String on format "dd-mm-yyyy"', async () => {
    expect(dateNow.format('dd-mm-yyyy')).toEqual(expect.stringMatching(expectedReverse));
  });

  dateNow = new Date;

  it('should return the date in 1 month ahead', async () => {
    expect(dateNow.nextMonth(1).toLocaleString()).toBe((new Date(dateNow.setMonth(dateNow.getMonth() + 1))).toLocaleString());
  });

  dateNow = new Date;

  it('should return the date 1 month ago', async () => {
    expect(dateNow.previousMonth(1).toLocaleString()).toBe((new Date(dateNow.setMonth(dateNow.getMonth() - 1))).toLocaleString());
  });

  dateNow = new Date;

  it('should return the date in 1 year ahead', async () => {
    expect(dateNow.nextYear(1).toLocaleString()).toBe((new Date(dateNow.setFullYear(dateNow.getFullYear() + 1))).toLocaleString());
  });

  dateNow = new Date;

  it('should return the date 1 year ago', async () => {
    expect(dateNow.previousYear(1).toLocaleString()).toBe((new Date(dateNow.setFullYear(dateNow.getFullYear() - 1))).toLocaleString());
  });

  dateNow = new Date(2020, 3, 23);

  it('should return is string equal April', async () => {
    expect(dateNow.getMonthName()).toBe('April');
  });

  it('should return is string equal April', async () => {
    expect(dateNow.getMonthName('en')).toBe('April');
  });

  it('should return is string equal Abril', async () => {
    expect(dateNow.getMonthName('pt-br')).toBe('Abril');
  });

  it('should return is string equal Abril', async () => {
    expect(dateNow.getMonthName('es')).toBe('Abril');
  });

  it('should return is the day number of year', async () => {
    dateNow = new Date(2020, 3, 23);
    expect(dateNow.getDayOfYear()).toBe(114);
  });
});
