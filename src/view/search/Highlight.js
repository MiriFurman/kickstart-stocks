import React from 'react'
import { map, toLower, concat, range, zipWith, assign } from 'lodash/fp'
import { pure } from 'recompose'
import { NormalTerm, HighlightTerm } from './Term'

export const splitByTerm = (text, term) => {
  if(text === '')
    return []

  if(term === '')
    return [NormalTerm(text)]
    
  const index = toLower(text).indexOf(toLower(term))
  if(index < 0)
    return [NormalTerm(text)]

  if(index === 0) 
    return concat([HighlightTerm(text.substr(0, term.length))], splitByTerm(text.substr(term.length), term))
  else 
    return concat([NormalTerm(text.substr(0, index)), HighlightTerm(text.substr(index, term.length))], splitByTerm(text.substr(index + term.length), term))  
}

const HighlightTermComp = ({text}) => <span style={{backgroundColor: 'lightblue'}}>{text}</span>

const termToComponent = term => term.highlight ? <HighlightTermComp key={term.key} text={term.text}/> : <span key={term.key}>{term.text}</span>

const Highlight = ({text, term}) => {
  const terms = splitByTerm(text, term)
  const indices = range(0, terms.length)
  const indexedTerms = zipWith((term, i) => assign(term, {key: `term-${i}`}), terms, indices)

  const termComponents = map(termToComponent, indexedTerms)
  
  return <span>{ termComponents }</span>
}

export default pure(Highlight)