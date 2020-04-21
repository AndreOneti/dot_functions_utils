import '../index';

describe('Date prototype test', () => {

  let dateNow = new Date;

  it('should return is string equal Wednesday', async () => {
    const weekEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    expect(dateNow.getWeekDay()).toBe(weekEng[dateNow.getDay()]);
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

});
