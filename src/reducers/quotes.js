

export default (state = [], action) => {
  
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case  "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if(quote.id !== action.quoteId || quote.votes === 0) {
          return quote
        } else {
          return {
            ...quote,
            votes: quote.votes - 1
          }
        }
      })
    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id !== action.quoteId) {
          return quote
        } else {
          return {
            ...quote,
            votes: quote.votes + 1
          }
        }
      })
       
  default:
      return state;
    }
  
}
