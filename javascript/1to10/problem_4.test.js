const problem_4 = require('./problem_4')

describe('4 - Largest palindrome product', () => {
  test('returns 9009 when number of digits is 2', () => {
    expect(problem_4(2)).toBe(9009)
  })
  test('returns 906609 when number of digits is 3', () => {
    expect(problem_4(3)).toBe(906609)
  })
})
