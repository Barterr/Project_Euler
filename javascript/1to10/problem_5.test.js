const problem_5 = require('./problem_5')

describe('5 - Smallest multiple', () => {
  test('returns 2520 when max is 10', () => {
    expect(problem_5(10)).toBe(2520)
  })
  test('returns 232792560 when max is 20', () => {
    expect(problem_5(20)).toBe(232792560)
  })
})
