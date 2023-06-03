const fizzbuzz = require('./sum');


test('fizzbuzz should return fizz when number is a multiple of 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  test('fizzbuzz should return fizz when number is a multiple of 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  test('fizzbuzz should return fizz when number is a multiple of 15', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  test('fizzbuzz should return 0 when number 0', () => {
    expect(fizzbuzz(1)).toBe("1");
  });