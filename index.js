const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// action
// action creator is a func return object
const BUY_CAKE = 'BUY_CAKE';
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Fist Action'
    }
}

const BUY_ICECREAM = 'BUY_ICECREAM';
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        payload: 'Two Action'
    }
}

// reducers
//  (prevState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20 
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, 
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state, 
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

// store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer);
console.log('Inital State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();  