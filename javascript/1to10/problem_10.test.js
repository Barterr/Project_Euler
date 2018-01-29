const problem_10 = require('./problem_10')

describe('10 - Summation of primes', () => {
  test('returns 17 when max prime is 10', () => {
    expect(problem_10(10)).toBe(17)
  })
  test('returns 142913828922 when max prime is 2000000', () => {
    expect(problem_10(2000000)).toBe(142913828922)
  })
})
