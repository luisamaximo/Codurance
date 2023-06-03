
const leapYear = require('./leapyear')

test('A year is a leap year if divisible by 4', () => {
    expect(leapYear(2000)).toBe(true);
  });

  test('A year is a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
  });


  test("A year is not a leap year if divisible by 100 but not by 400" , () => {
      expect(leapYear(1800)).toBe(false);
  });