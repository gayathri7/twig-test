const divideArrayIntoNEqualParts = require('./divide')

const Arr = [1, 2, 3, 4, 5, 6, 7],
  n = 4,
  result = [[1, 2], [3, 4], [5, 6], [7]]
describe('Suite of tests on divideArrayIntoNEqualParts', () => {
  test("Test suite1: for Arr " + Arr + " Size: " + n + " and result: " + result, () => {
    const data = divideArrayIntoNEqualParts(Arr, n);
    expect(data).toEqual(result)
  })
})