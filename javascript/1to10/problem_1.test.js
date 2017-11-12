const problem_1 = require('./problem_1')

describe('1 - Multiples of 3 and 5', () => {
  test('returns 233168 when maxNumber is 1000', () => {
    expect(problem_1(1000)).toBe(233168)
  })

  test('returns 23 when maxNumber is 10', () => {
    expect(problem_1(10)).toBe(23)
  })

  test('returns 33 when maxNumber is 10', () => {
    expect(problem_1(11)).toBe(33)
  })
})
