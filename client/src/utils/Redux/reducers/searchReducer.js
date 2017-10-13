// create reducers
//----------------------------------------------

let initiateState = {
    articles: [],
    error: null
}

export const searchResults = (state = initiateState, action) => {
    switch (action.type){
        case 'ADD_RESULTS':
            return {...state, articles: action.payload}
        case 'REMOVE_RESULTS':
            return state = []
        case 'ERROR_RESULTS':
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default searchResults;