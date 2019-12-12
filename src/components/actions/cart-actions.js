import { ADD_TO_LIST, REMOVE_FROM_LIST, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from './types/action-types'


//add to cart action
export const addToList= (id)=>{
    return{
        type: ADD_TO_LIST,
        id
    }
}

//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_FROM_LIST,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}