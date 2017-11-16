const problem_6 = require('./problem_6')

describe('6 - Sum square difference', () => {
  test('returns 2640 when max is 10', () => {
    expect(problem_6(10)).toBe(2640)
  })
  test('returns 25164150 when max is 100', () => {
    expect(problem_6(100)).toBe(25164150)
  })
})
