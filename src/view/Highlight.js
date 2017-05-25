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

  while(true) {
    const index = loText.indexOf(loTerm, i)
    if(index < 0){
      terms.push(Term(text.substr(i), false))
      break
    }

    termIndices.push(index)
    terms.push(Term(text.substring(i, index), false))
    terms.push(Term(text.substr(index, term.length), true))
    i = index + term.length
  } 

  return terms
}

const NormalTerm = ({text}) => <span>{text}</span>
const HighlightTerm = ({text}) => <span style={{backgroundColor: 'lightblue'}}>{text}</span>

const termToComponent = term => term.highlight ? <HighlightTerm text={term.text}/> : <NormalTerm text={term.text}/>

const Highlight = ({text, term}) => {
  const terms = splitByTerm(text, term)
  const termComponents = map(termToComponent, terms)
  
  return <span>{ termComponents }</span>
}

export default Highlight