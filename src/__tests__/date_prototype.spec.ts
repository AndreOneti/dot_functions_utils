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

});
