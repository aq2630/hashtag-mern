import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch) => {

    const { data } = await axios.get(`/api/products/${id}`)

     dispatch( {
         type:CART_ADD_ITEM,
         payload:{
             product:data._id,
             name:data.name,
             image:data.image,
             price:data.price,
             countInStock:data.countInStock,
             qty

         }
        })

}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })

}