import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { orderCreateReducer, orderDetailsReducer, orderListReducer } from './reducers/orderReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    orderCreate : orderCreateReducer,
    orderDetails: orderDetailsReducer,
    userLogin: userLoginReducer,
    orderList: orderListReducer
})



const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store