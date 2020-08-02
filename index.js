const BUY_CAKE = 'BUY_CAKE';

// action
// action creator is a func return object
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Fist Action'
    }
}

// reducers
//  (prevState, action) => newState

const initialState = {
    numofCakes: 10, 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, 
            numofCakes: state.numofCakes - 1
        }
        default: return state;
    }
}