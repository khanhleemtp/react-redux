const BUY_CAKE = 'BUY_CAKE';

// action creator is a func return object
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Fist Action'
    }
}