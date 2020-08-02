# ==============Introduction===========================

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

# ===================== Three Core Concept ==============
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
    - Cake Shop Scenario   - Redux             - Purpose
    Shop                   Store                 Holds the state of your app
    Intention to BUY_CAKE  Action                Describes what happened
    Shopkeeper             Reducer               Ties the store and actions together

# A store that holds the state of the app
# A action that describes the changes in the state of the application
# A reducer which actually carries out the state transtion depending on the action
