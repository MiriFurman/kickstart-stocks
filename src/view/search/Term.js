const Term = highlight => text => ({text, highlight})

export const NormalTerm = Term(false)
export const HighlightTerm = Term(true)
