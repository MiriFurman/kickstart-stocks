import React from 'react'
import { map, toLower } from 'lodash/fp'
import Term from './Term'

export const splitByTerm = (text, term) => {
  if(text === '')
    return [Term('', false)]

  if(term === '')
    return [Term(text, false)]

  const loText = toLower(text)
  const loTerm = toLower(term)

  let i = 0
  const termIndices = []
  const terms = []
  let key = 1

  const addTerm = (term, highlight) => {
    if(term.length === 0)
      return

    terms.push(Term(term, highlight, `term-${key}`))
    key++
  }

  while(true) {
    const index = loText.indexOf(loTerm, i)
    if(index < 0){
      addTerm(text.substr(i), false)
      break
    }

    termIndices.push(index)
    
    addTerm(text.substring(i, index), false)
    addTerm(text.substr(index, term.length), true)
    i = index + term.length
  } 

  return terms
}

const HighlightTerm = ({text}) => <span style={{backgroundColor: 'lightblue'}}>{text}</span>

const termToComponent = term => term.highlight ? <HighlightTerm key={term.key} text={term.text}/> : <span key={term.key}>{term.text}</span>

const Highlight = ({text, term}) => {
  const terms = splitByTerm(text, term)
  const termComponents = map(termToComponent, terms)
  
  return <span>{ termComponents }</span>
}

export default Highlight