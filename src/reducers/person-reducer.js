const defaultState = {
    persons: []
}


export default (state = defaultState, action = {}) => {
    console.log(action.type);   
    console.log(state);
    switch (action.type) {
        case 'FETCH_ALL_PERSONS_FULFILLED': {
            return {
                ...state,
                persons: action.payload.data
            }
        }
        case 'SEARCH_PERSON_FULFILLED': {
            return {
                ...state,
                persons: action.payload.data
            }
        }
        default:
            return state;

    }


}