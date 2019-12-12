import { ADD_TO_LIST, REMOVE_FROM_LIST, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, VIEW_PRODUCT } from './types/action-types'


//add to cart action
export const addToList= (id)=>{
    return{
        type: ADD_TO_LIST,
        id
    }
}

//remove item action
export const removeFromList=(id)=>{
    return{
        type: REMOVE_FROM_LIST,
        id
    }
}
//subtract quantity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

//add quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//view product details action
export const viewProduct=(id)=>{
    return{
        type: VIEW_PRODUCT,
        id
    }
}