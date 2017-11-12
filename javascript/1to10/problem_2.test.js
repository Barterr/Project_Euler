const problem_2 = require('./problem_2')

describe('2 - Even Fibonacci numbers', () => {
  test('returns 2 when limit is 2', () => {
    expect(problem_2(2)).toBe(2)
  })

  test('returns 10 when limit is 10', () => {
    expect(problem_2(10)).toBe(10)
  })

  test('returns 4613732 when limit is 4000000', () => {
    expect(problem_2(4000000)).toBe(4613732)
  })
})
