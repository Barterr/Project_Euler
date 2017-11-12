const problem_3 = require('./problem_3')

describe('3 - Largest prime factor', () => {
  test('returns 5 when limit is 50', () => {
    expect(problem_3(50)).toBe(5)
  })

  test('returns 17 when limit is 51', () => {
    expect(problem_3(51)).toBe(17)
  })

  test('returns 29 when limit is 13195', () => {
    expect(problem_3(13195)).toBe(29)
  })

  test('returns 6857 when limit is 600851475143', () => {
    expect(problem_3(600851475143)).toBe(6857)
  })
})
