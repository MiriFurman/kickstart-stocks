import { splitByTerm } from './Highlight.js'
import Term from './Term'

describe('split by term', () => {

  test('empty', () => {
    expect(splitByTerm('', '')).toEqual([])
  })

  test('empty text', () => {
    expect(splitByTerm('', 'xyz')).toEqual([])
  })

  test('empty term', () => {
    expect(splitByTerm('hello', '')).toEqual([Term('hello', false, 'term-1')])
  })

  test('not occuring', () => {
    expect(splitByTerm('hello world', 'xyz')).toEqual([Term('hello world', false, 'term-1')])
  })

  test('term occur at start', () => {
    expect(splitByTerm('xYz blah Blah', 'Xyz')).toEqual([Term('xYz', true, 'term-1'), Term(' blah Blah', false, 'term-2')])
  })

  test('term occur at middle', () => {
    expect(splitByTerm('blah xYz Blah', 'Xyz')).toEqual([Term('blah ', false, 'term-1'), Term('xYz', true, 'term-2'), Term(' Blah', false, 'term-3')])
  })

  test('term occur at end', () => {
    expect(splitByTerm('blah Blah xYz', 'Xyz')).toEqual([Term('blah Blah ', false, 'term-1'), Term('xYz', true, 'term-2')])
  })

  test('term occur twice', () => {
    expect(splitByTerm('blah XYZ Blah xYz blaH', 'Xyz'))
      .toEqual([
        Term('blah ', false, 'term-1'), 
        Term('XYZ', true, 'term-2'),
        Term(' Blah ', false, 'term-3'),
        Term('xYz', true, 'term-4'), 
        Term(' blaH', false, 'term-5')
      ])
  })

  test('AAAAA', () => {
    expect(splitByTerm('AAAAA', 'aa')).toEqual([Term('AA', true, 'term-1'), Term('AA', true, 'term-2'), Term('A', false, 'term-3')])
  })
})