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

# ===========================5, Action======================================
 # Tương tác trực tiếp với store
 # Mang thông tin từ app đến store
 # Object đơn giản
 # type property chỉ định loại hành động được thực thi
 # type property thường định nghĩa 1 hằng số kiểu Strings
