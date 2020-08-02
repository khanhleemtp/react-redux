# ==============1, Introduction===========================

# Redux quản lí state
    - Trong React, redux stores the states container
# State có thể dự đoán được
    - The state of application can change: 
        + todo list app - item (pending) -> item(completed)
        + Chúng ta có thể theo dõi chuyển hướng đó 
        + Làm ứng dụng dễ quản lí
# Là thư viện riêng của JS

# Redux is a predictable state container for JS apps

# React + Redux ?   
    - State in react nested, more state
    - Truyền từ cha sang con dùng props -> Dư thừa khi truyền
    - Redux is predictable state container
    
# React < React-Redux > Redux

# Summary 
    - React is library used to build user interfaces
    - Redux is a library for managing state in predictable way in JS
    - React-redux is a library that prodvides bindings to use React and React
        together in an application

# ===================== 3, Three Core Concept ==============
# Ex: Cake shop
    - Entities: 
        + Shop: Stores cakes on a shelf
        + Shopkeeper: At the front of the store
        + Customer: At the store entrance 

    - Activies
        + Customer: Buy a cake
        + Shopkeeper: * Remove a cake from the self
                      * Recept to keep track
# Three Core Concepts contd
- Cake Shop Scenario        - Redux          - Purpose
    + Shop                   Store           Holds the state of your app
    + Intention to BUY_CAKE  Action          Describes what happened
    + Shopkeeper             Reducer         Ties the store and actions together

# A store that holds the state of the app
# A action that describes the changes in the state of the application
# A reducer which actually carries out the state transtion depending on the action

# ============= 4, Three principles =================================
# Redux
# 1 The state of your app is stored in an obj tree with a single store
- Store: 1 Single Object which would be managed by Redux Store: Ex: {
    numOfCakes: 3
}
# 2 The only way to change is to emit an action, an object describing what happened
- Action: Cake shop: Let the shopkeeper know about our action {
    type: BUY_CAKES
}

# 3 To specify how the state tree is transformed by actions, you write pure reducers
- Reducer: Shopkeeper
       + (prevState, action) => NewState
       + function dạng switch case

#           ---Subcrible---------JS App------dispatch---
#           ^                                          ^ 
#           Redux Store(State)<----->Reducer-------> Action

# ===========================5, Action ======================================
 # Tương tác trực tiếp với store
 # Mang thông tin từ app đến store
 # Object đơn giản
 # type property chỉ định loại hành động được thực thi
 # type property thường định nghĩa 1 hằng số kiểu Strings

 # ========================== 6, Reducers =====================================
 # Chỉ định trạng thái thay đổi ntn khi phản hồi actions và gửi đến store
 # Hàm chấp nhận 2 tham số là action, state và trả về state mới trong app
 # (prevState, action) => newState

 # =========================== 7, Stores ======================================
 # One store for entire app
 # Responsibilities
   # Holds app state
   # Allow access to state via getState()
   # Allow state to be updated via dispatch(action)
   # Registers listeners via subcrible(listener)
   # Handles unregistering of listenes via the function return  by subcribles(listener)

# ============================ 8, Cakes and Ice Creams ========================
 # Cake shop
  # Cakes stored on the shelf
  # Shopkeeper to handle BUY_CAKE from customer

 # Sell ice creams!
 # Ice Creams stored in the freezer
 # New Shopkeeper to handle BUY_ICECREAM from customer

# ============================= 9, Multiple Reducers ===========================

# ============================= 10, Combine Reducers ===========================
# const combineReducers = redux.combineReducers;
# const rootReducers = combineReducers({
#    cake: cakeReducer,
#    iceCream: iceCreamReducer
# })

# ============================== 11, Middleware ==============================
# is the suggested way to extend Redux with custom functionality
# Provides a third-party extension point between dispatching an action, and the
# moment it reaches the reducer
# Use middleware for logging, crash reporting, performing asynchonous tasks etc
# const applyMiddleware = redux.applyMiddleware;
# const store = createStore(rootReducer, applyMiddleware([...]))

# ============================ 12, Async actions =============================
# Sync actions As soon as action was dispatched, the state was immediately updated
# Vd BUY_CAKE , numOfCake - 1
# Async : Async API call to fetch data from end point and use that data in your app
# State = {
    loading: true,
    data: [],
    error: ''
}
# Loading: Display a loading spinner in your component
# Data: list of users
# error: error

# Action
# FETCH_USER_REQUEST - Fetch list of users
# FETCH_USER_SUCCESS - Fetched successfully
# FETCH_USER_FAILURE - Error fetching the data

# Reducers
# case: FETCH_USER_REQUEST loading: true
# case: FETCH_USER_SUCCESS loading: false, users: data(from API)
# case: FETCH_USER_FAILURE loading: false, errors: errors (from API)

# ======================== 13-redux thunk middleware=====================
# axios request to an API end point
# redux-thunk : Define async action creator, middleware
# redux-thunk cho phép action creator trả về 1 function

# ====================== 14, react-redux-setup =========================
#           ---Subcrible---------JS App------dispatch---
#           ^                                          ^ 
#           Redux Store(State)<----->Reducer-------> Action

# ==================== 15 action: Action, Type ========================
#  ====================16 reducers: Function ==========================
#  ====================17 store: ======================================
  #  import {createStore} from 'redux'
  # App.js import { Provider } from 'react-redux'

# ==================== 18 connect =====================================
# 3 Step
# 1 const mapStateToProps = state => { return { numOfCake: state.numOfCake } }
# 2 const mapDispatchToProps = dispatch => { return { buyCake: () => dispatch(buyCake())}}
# 3 connect : HOC export default connect(mapDispatchToProps, mapDispatchToProps)(CakeContainer);

# ====================== 19 React Redux with HOOK =========================
# React Redux pattern
# Action creators, reducers, provide the store and connect the componnents
# Components can access state and dispatch to props
# Subcribe to store and dispatch actions without connect()

# ====================== 20 Use Selector Hook  ======================
# useSelector(state => state.numOfCake ) 

# ====================== 21 Use Dispatch Hook ========================
# const dispatch = useDispatch()

# ====================== 22 Cake and IceCreams ========================
# rootReducer, combineReducer({ cake: cakeReducer, ... })

# ====================== 23 Logger =====================================
# redux-logger, applyMiddleware

# ====================== 24 Redux Dev Tool =============================
# npm install --save redux-devtools-extension
# import { composeWithDevTools } from 'redux-devtools-extension';
# const store = createStore(reducer, composeWithDevTools(
#  applyMiddleware(...middleware),
#  // other store enhancers if any
# ));

# ====================== 25 Action payload ================================
# const[number, setNumber] = useState(1); 
# onClick={ () => props.buyCake(number)
# action.payload = number

# ====================== 26 mapStateToProps ================================
# const mapStateToProps = (state, ownProps) => {
#    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
#    return {
#        item: itemState
#    }
# }
# Parent: 
# <ItemContainer cake>
# <ItemContainer >

# ====================== 27 mapDispatchToProps ================================

# const mapDispatchToProps = (dispatch, ownProps) => {
#    const dispatchFunction = ownProps.cake ? 
#    ()  => dispatch(buyCake()) :
#    () => dispatch(buyIceCream());
#    return {
#        buyItem: dispatchFunction
#    }
# }

# export default connect(null, mapDispatchToProps)(ItemContainer);

# ========================= 28 Async Action ====================================


# ========================= 29 Redux-thunk Get Request ========================
