const redux = require('redux');

const createStore = redux.createStore;

// action
// action creator is a func return object
const BUY_CAKE = 'BUY_CAKE';
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

// store
const store = createStore(reducer);
console.log('Inital State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();