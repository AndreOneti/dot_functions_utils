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

  const expectedBySlash = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
  it('should return is String on format "dd/mm/yyyy"', async () => {
    expect(dateNow.format('dd/mm/yyyy')).toEqual(expect.stringMatching(expectedBySlash));
  });

  const expectedBySlashReverse = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  it('should return is String on format "yyyy/mm/dd"', async () => {
    expect(dateNow.format('yyyy/mm/dd')).toEqual(expect.stringMatching(expectedBySlashReverse));
  });

  const dateHour = /[0-9]{2}\/[0-9]{2}\/[0-9]{4} - [0-9]{2}:[0-9]{2}:[0-9]{2}/;
  it('should return is String on format "dd/mm/yyyy - HH:MM:SS"', async () => {
    expect(dateNow.format('dd/mm/yyyy - hh:mm:ss')).toEqual(expect.stringMatching(dateHour));
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

  it('should return array and log on console', async () => {
    dateNow = new Date(2020, 3, 23);
    expect(dateNow.log()).toBe(dateNow);
  });

  it('should return array and log on console', async () => {
    dateNow = new Date(2020, 3, 23);
    expect(dateNow.log("Date")).toBe(dateNow);
  });
});

describe('Date formatter test', () => {

  let dateNow = new Date(2020, 6, 17);

  it('should return the date formted like "17 17 Fri Friday" in eng', async () => {
    expect(dateNow.toFormat("d dd ddd dddd")).toBe("17 17 Fri Friday");
  });

  it('should return the date formted like "17 17 Fri Friday" in eng', async () => {
    expect(dateNow.toFormat("d dd ddd dddd", 'en')).toBe("17 17 Fri Friday");
  });

  it('should return the date formted like "17 17 Fri Friday" in es', async () => {
    expect(dateNow.toFormat("d dd ddd dddd", 'es')).toBe("17 17 Vie Viernes");
  });

  it('should return the date formted like "17 17 Fri Friday" in pt-br', async () => {
    expect(dateNow.toFormat("d dd ddd dddd", 'pt-br')).toBe("17 17 Sex Sexta");
  });


  it('should return the date formted like "7 07 July July" in eng', async () => {
    expect(dateNow.toFormat("m mm mmm mmmm")).toBe("7 07 July July");
  });

  it('should return the date formted like "7 07 July July" in eng', async () => {
    expect(dateNow.toFormat("m mm mmm mmmm", 'en')).toBe("7 07 July July");
  });

  it('should return the date formted like "7 07 Jul Julio" in es', async () => {
    expect(dateNow.toFormat("m mm mmm mmmm", 'es')).toBe("7 07 Jul Julio");
  });

  it('should return the date formted like "7 07 Jul Julho" in pt-br', async () => {
    expect(dateNow.toFormat("m mm mmm mmmm", 'pt-br')).toBe("7 07 Jul Julho");
  });


  it('should return the date formted like "20 2020" in eng', async () => {
    expect(dateNow.toFormat("yy yyyy")).toBe("20 2020");
  });

  it('should return the date formted like "20 2020" in eng', async () => {
    expect(dateNow.toFormat("yy yyyy", 'en')).toBe("20 2020");
  });

  it('should return the date formted like "20 2020" in es', async () => {
    expect(dateNow.toFormat("yy yyyy", 'es')).toBe("20 2020");
  });

  it('should return the date formted like "20 2020" in pt-br', async () => {
    expect(dateNow.toFormat("yy yyyy", 'pt-br')).toBe("20 2020");
  });


  it('should return the date formted like "00-00-00" in eng', async () => {
    expect(dateNow.toFormat("HH-MM-SS")).toBe("00-00-00");
  });

  it('should return the date formted like "00-00-00" in eng', async () => {
    expect(dateNow.toFormat("HH-MM-SS", 'en')).toBe("00-00-00");
  });

  it('should return the date formted like "00-00-00" in es', async () => {
    expect(dateNow.toFormat("HH-MM-SS", 'es')).toBe("00-00-00");
  });

  it('should return the date formted like "00-00-00" in pt-br', async () => {
    expect(dateNow.toFormat("HH-MM-SS", 'pt-br')).toBe("00-00-00");
  });

});
