import { splitByTerm } from './Highlight.js'
import Term from './Term'

describe('split by term', () => {

  test('empty', () => {
    expect(splitByTerm('', '')).toEqual([Term('', false)])
  })

  test('empty text', () => {
    expect(splitByTerm('', 'xyz')).toEqual([Term('', false)])
  })

  test('empty term', () => {
    expect(splitByTerm('hello', '')).toEqual([Term('hello', false)])
  })

  test('not occuring', () => {
    expect(splitByTerm('hello world', 'xyz')).toEqual([Term('hello world', false)])
  })

  test('term occur at start', () => {
    expect(splitByTerm('xYz blah Blah', 'Xyz')).toEqual([Term('xYz', true), Term(' blah Blah', false)])
  })

  test('term occur at middle', () => {
    expect(splitByTerm('blah xYz Blah', 'Xyz')).toEqual([Term('blah ', false), Term('xYz', true), Term(' Blah', false)])
  })

  test('term occur at end', () => {
    expect(splitByTerm('blah Blah xYz', 'Xyz')).toEqual([Term('blah Blah ', false), Term('xYz', true)])
  })

  test.only('term occur twice', () => {
    expect(splitByTerm('blah XYZ Blah xYz blaH', 'Xyz')).toEqual([Term('blah ', false), Term('XYZ', true), Term(' Blah ', false), Term('xYz', true), Term(' blaH', false)])
  })

  test('AAAAA', () => {
    expect(splitByTerm('AAAAA', 'aa')).toEqual([Term('AA', true), Term('AA', true), Term('A', false)])
  })
})