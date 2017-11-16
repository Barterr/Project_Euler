const problem_9 = require('./problem_9')

describe('9 - Special Pythagorean triplet', () => {
  test('returns 60 when sum is 12', () => {
    expect(problem_9(12)).toBe(60)
  })
  test('returns 23514624000 when n is 13', () => {
    expect(problem_9(1000)).toBe(31875000)
  })
})
