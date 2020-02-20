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

import { LOGIN_USER, ADD_TO_LIST, REMOVE_FROM_LIST, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, VIEW_PRODUCT } from "../actions/types/action-types";

const initialState = {
  items: [
    {
      id: "1",
      name: "Realme C2",
      price: "6,499",
      type: "Mobile",
      desc: "Say hello to the Realme C2 smartphone whose stylish design encompasses plenty of features, such as a 13 MP + 2 MP rear camera, a 5 MP front camera, and a 4000 mAh battery to make your life simpler.",
      image: image1,
      quantity: 0
    },
    {
      id: "2",
      name: "Redmi 8A (Sunset Red, 32GB)",
      price: "6,499",
      type: "Mobile",
      desc: "The Redmi 8A features a 5000-mAh high-capacity battery, so you can watch more videos, click more pictures, play more games on a single charge. What’s more? It also supports 18 W Fast Charge, so you can get back in action, in no time.",
      image: image2,
      quantity: 0
    },
    {
      id: "3",
      name: "Redmi 7A (Matte Black, 32GB)",
      price: "5,499",
      type: "Mobile",
      desc: "With the Redmi 7A smartphone, you can access your digital world right in the palm of your hand. It is crafted and designed to ensure smooth operation and seamless performance. It comes with an HD Full Screen Display that enhances your viewing experience. ",
      image: image3,
      quantity: 0
    },
    {
      id: "4",
      name: "Oppo K1 (Piano Black, 64GB)",
      price: "13,990",
      type: "Mobile",
      desc: "OPPO K1 brings innovative technologies to your fingertips. With a fast in-screen fingerprint sensor, a powerful Qualcomm Snapdragon 660 AIE processor, a sharp AMOLED display, an AI-powered dual rear camera system and a 3500 mAh battery",
      image: image4,
      quantity: 0
    },
    {
      id: "5",
      name: "Oppo K1 (Astral blue, 64GB)",
      price: "13,990",
      type: "Mobile",
      desc: "OPPO K1 brings innovative technologies to your fingertips. With a fast in-screen fingerprint sensor, a powerful Qualcomm Snapdragon 660 AIE processor, a sharp AMOLED display, an AI-powered dual rear camera system and a 3500 mAh battery, this smartphone is built to deliver an impressive performance.",
      image: image5,
      quantity: 0
    },
    {
      id: "6",
      name: "Godrej 99 L Direct Cool Single Door",
      price: "9,499",
      type: "Refrigerator",
      desc: "With this Godrej Refrigerator, you won’t run out of space to store your favourite food and beverages. And that’s not all, it uses the Antibacterial Technology to make sure that your stored food, beverages, veggies, etc., stay fresh and aromatic for an extended period of time.",
      image: image6,
      quantity: 0
    },
    {
      id: "7",
      name: "Whirlpool 190 L Direct Cool Single Door",
      price: "15,240",
      type: "Refrigerator",
      desc: "This 190 L single-door refrigerator lets you store all your food and beverages efficiently. This refrigerator comes equipped with the 6th sense QuickChill Technology that helps retain the cool temperature for up to nine hours during a power outage.",
      image: image7,
      quantity: 0
    },
    {
      id: "8",
      name: "IFB Fully Automatic",
      price: "19,990",
      type: "Washing Machine",
      desc: "This essential home appliance features the Auto Imbalance Vibration Control technology, the Ball Valve Technology, and a Crescent Moon Drum for quick and efficient washing of your laundry.",
      image: image8,
      quantity: 0
    },
    {
      id: "9",
      name: "Whirlpool 7.2 kg Semi Automatic",
      price: "9,390",
      type: "Washing Machine",
      desc: "Bring home the Whirlpool Ace Supreme Plus 7.2 kg Semi-Automatic washing machine and keep your clothes clean and fresh from bad odour and bacteria.",
      image: image9,
      quantity: 0
    },
    {
      id: "10",
      name: "Butterfly Rapid 4 Jar 750 watts 750",
      price: "16,999",
      type: "Mixer/Grinder",
      desc: "Butterfly Rapid 4 jar mixer grinder comes with a powerful 750W overload protected motor. Whip up chutneys, grind masalas and prepare yummy shakes effortlessly with the Butterfly Rapid Mixer Grinder.",
      image: image10,
      quantity: 0
    }
  ],
  productsInCart: [],
  total: 0,
  count: 0,
  loggedIn: false
};

const cartReducer = (state = initialState, action) => {

  // To check whether the user is logged in or logged out

  if (action.type === LOGIN_USER) {
    if (action.value) {
      return {
        ...state,
        loggedIn: true
      }
    } else {
      return {
        ...state,
        loggedIn: false
      }
    }
  }

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
    let count;

    //calculating the total and no of items in the cart
    if (itemToRemove) {
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      count = state.count > 0 ? state.count - 1 : 0;
      if (itemToRemove.quantity > 0) {
        return {
          ...state,
          productsInCart: new_items,
          total: newTotal,
          count: count
        }
      }
    } else {
      count = state.count;
      return {
        ...state,
        productsInCart: new_items,
        count: count
      }
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

  if (action.type === VIEW_PRODUCT) {
    let addedItem = state.items.find(item => item.id === action.id)
    return {
      ...state,
      item: addedItem,
      count: state.count
    }
  }

  else {
    return state
  }

}

export default cartReducer;
