import { splitByTerm } from './Highlight.js'
import { NormalTerm, HighlightTerm } from './Term'

describe('split by term', () => {

  test('empty', () => {
    expect(splitByTerm('', '')).toEqual([])
  })

  test('empty text', () => {
    expect(splitByTerm('', 'xyz')).toEqual([])
  })

  test('empty term', () => {
    expect(splitByTerm('hello', '')).toEqual([NormalTerm('hello')])
  })

  test('not occuring', () => {
    expect(splitByTerm('hello world', 'xyz')).toEqual([NormalTerm('hello world')])
  })

  test('term occur at start', () => {
    expect(splitByTerm('xYz blah Blah', 'Xyz')).toEqual([HighlightTerm('xYz'), NormalTerm(' blah Blah')])
  })

  test('term occur at middle', () => {
    expect(splitByTerm('blah xYz Blah', 'Xyz')).toEqual([NormalTerm('blah ', 'term-1'), HighlightTerm('xYz'), NormalTerm(' Blah')])
  })

  test('term occur at end', () => {
    expect(splitByTerm('blah Blah xYz', 'Xyz')).toEqual([NormalTerm('blah Blah '), HighlightTerm('xYz')])
  })

  test('term occur twice', () => {
    expect(splitByTerm('blah XYZ Blah xYz blaH', 'Xyz'))
      .toEqual([
        NormalTerm('blah '), 
        HighlightTerm('XYZ'),
        NormalTerm(' Blah '),
        HighlightTerm('xYz'), 
        NormalTerm(' blaH')
      ])
  })

  test('AAAAA', () => {
    expect(splitByTerm('AAAAA', 'aa')).toEqual([HighlightTerm('AA'), HighlightTerm('AA'), NormalTerm('A')])
  })
})