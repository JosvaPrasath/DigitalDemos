import image1 from "../images/realmec2.jpeg";
import image2 from "../images/mi-redmi-8a-red.jpeg";
import image3 from "../images/mi-redmi-7a-black.jpeg"
import image4 from "../images/oppo-k1-piano-black.jpeg";
import image5 from "../images/oppo-k1-astral-blue.jpeg";
import image6 from "../images/godrej-fridge.jpeg";
import image7 from "../images/whirlpool-fridge.jpeg";
import image8 from "../images/ifb-washing-6kg.jpeg";
import image9 from "../images/whirlpool-washing-7.2kg.jpeg";
import image10 from "../images/butterfly-4-jar-750-grinder.jpeg";

import { ADD_TO_LIST, REMOVE_FROM_LIST, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from "../actions/types/action-types";

const initialState = {
  items: [
    {
      id: "1",
      name: "Realme C2",
      price: "6,499",
      type: "Mobile",
      image: image1,
      quantity: 0
    },
    {
      id: "2",
      name: "Redmi 8A (Sunset Red, 32GB)",
      price: "6,499",
      type: "Mobile",
      image: image2,
      quantity: 0
    },
    {
      id: "3",
      name: "Redmi 7A (Matte Black, 32GB)",
      price: "5,499",
      type: "Mobile",
      image: image3,
      quantity: 0
    },
    {
      id: "4",
      name: "Oppo K1 (Piano Black, 64GB)",
      price: "13,990",
      type: "Mobile",
      image: image4,
      quantity: 0
    },
    {
      id: "5",
      name: "Oppo K1 (Astral blue, 64GB)",
      price: "13,990",
      type: "Mobile",
      image: image5,
      quantity: 0
    },
    {
      id: "6",
      name: "Godrej 99 L Direct Cool Single Door",
      price: "9,499",
      type: "Refrigerator",
      image: image6,
      quantity: 0
    },
    {
      id: "7",
      name: "Whirlpool 190 L Direct Cool Single Door",
      price: "15,240",
      type: "Refrigerator",
      image: image7,
      quantity: 0
    },
    {
      id: "8",
      name: "IFB Fully Automatic",
      price: "19,990",
      type: "Washing Machine",
      image: image8,
      quantity: 0
    },
    {
      id: "9",
      name: "Whirlpool 7.2 kg Semi Automatic",
      price: "9,390",
      type: "Washing Machine",
      image: image9,
      quantity: 0
    },
    {
      id: "10",
      name: "Butterfly Rapid 4 Jar 750 watts 750",
      price: "16,999",
      type: "Mixer/Grinder",
      image: image10,
      quantity: 0
    }
  ],
  productsInCart: [],
  total: 0,
  count: 0
};

const cartReducer = (state = initialState, action) => {

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_LIST) {
    let addedItem = state.items.find(item => item.id === action.id)
    //check if the action id exists in the productsInCart
    let existed_item = state.productsInCart.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
        count: state.count + 1
      }
    }
    else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        productsInCart: [...state.productsInCart, addedItem],
        total: newTotal,
        count: state.count + 1
      }
    }
  }
  if (action.type === REMOVE_FROM_LIST) {
    let itemToRemove = state.productsInCart.find(item => action.id === item.id)
    let new_items = state.productsInCart.filter(item => action.id !== item.id)

    //calculating the total and no of items in the cart
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    let count = state.count > 0 ? state.count - 1 : 0;
    return {
      ...state,
      productsInCart: new_items,
      total: newTotal,
      count: count
    }
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    
    return {
      ...state,
      total: newTotal,
      count: state.count + 1
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.productsInCart.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      let count = state.count > 0 ? state.count - 1 : 0;
      return {
        ...state,
        productsInCart: new_items,
        total: newTotal,
        count: count
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      let count = state.count > 0 ? state.count - 1 : 0;
      return {
        ...state,
        total: newTotal,
        count: count
      }
    }

  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    }
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 6
    }
  }

  else {
    return state
  }

}

export default cartReducer;
