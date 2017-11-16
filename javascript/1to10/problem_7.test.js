const problem_7 = require('./problem_7')

describe('7 - 10001st prime', () => {
  test('returns 997 when n is 168', () => {
    expect(problem_7(168)).toBe(997)
  })
  test('returns 104743 when n is 10001', () => {
    expect(problem_7(10001)).toBe(104743)
  })
  test('returns 104759 when n is 10002', () => {
    expect(problem_7(10002)).toBe(104759)
  })
  test('returns 541 when n is 100', () => {
    expect(problem_7(100)).toBe(541)
  })
})
