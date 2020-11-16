const postcodesMatrix = require('../src/postcodes-matrix')

test('region to code', () => {
  expect(postcodesMatrix.get('TD14')).toBe('Industrial Scotland')
})

test('does not have all of them', () => {
  expect(postcodesMatrix.get('N16LB')).toBeUndefined()
})

test('failure empty', () => {
  expect(postcodesMatrix.get('')).toBeUndefined()
})
