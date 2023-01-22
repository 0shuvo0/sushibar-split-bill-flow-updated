import { createStore } from 'vuex'

export default createStore({
  state: {
    tip: 0,
    cart: [ { "title": "S3 Tori Gyoza Starter", "description": "Pan-fried chicken dumplings.", "img": "/img/3.43d2554d.png", "special": true, "tags": [ "hot", "vegetarian", "organic" ], "price": 4.3, "optionGroups": [ { "activeOptionIdxs": [ 1 ], "selectedCount": 1, "title": "Choose a size", "required": false, "freeSelect": true, "label": "Extra", "options": [ { "title": "Option 1", "price": 0 }, { "title": "Option 2", "price": 3 }, { "title": "Option 3", "price": 4.5 }, { "title": "Option 4", "price": 4.5 }, { "title": "Option 5", "price": 4.5 }, { "title": "Option 6", "price": 4.5 } ] } ], "qty": 1, "totalPrice": "7.30" }, { "title": "S2 Tori Gyoza Starter", "description": "Must have Japanese dumplings. Steamed & pan-fried to perfection, served with tangy shoyu soy.", "img": "/img/2.5e1fb100.png", "special": true, "tags": [ "vegetarian", "organic" ], "price": 4.3, "optionGroups": [ { "activeOptionIdxs": [ 1, 2 ], "selectedCount": 2, "title": "Choose a size", "required": 2, "options": [ { "title": "Option 1", "price": 0 }, { "title": "Option 2", "price": 3 }, { "title": "Option 3", "price": 4.5 } ] } ], "qty": 1, "totalPrice": "11.80" }, { "title": "S4 Tori Gyoza Starter", "description": "Pan-fried chicken dumplings.", "img": "/img/4.916b6aec.png", "special": true, "tags": [ "vegetarian", "organic", "glutenFree" ], "price": 4.3, "optionGroups": [ { "activeOptionIdxs": [ 1 ], "selectedCount": 1, "title": "Choose an option", "required": false, "options": [ { "title": "Pita Bread", "price": 4.3 }, { "title": "Naan Bread", "price": 4.3 }, { "title": "Rice", "price": 4.3 } ] } ], "qty": 4, "totalPrice": "34.40" }, { "title": "Cookie", "description": "Lorem ipsum dolor sit amet.", "calories": "402kcal", "img": "/img/7.94266e6e.png", "tags": [ "vegetarian", "organic" ], "price": 4.3, "qty": 3, "totalPrice": "12.90", "optionGroups": [] }, { "title": "S3 Tori Gyoza Starter 6", "description": "Pan-fried chicken dumplings.", "img": "/img/3.43d2554d.png", "special": true, "tags": [ "hot", "vegetarian", "organic" ], "price": 4.3, "optionGroups": [ { "activeOptionIdxs": [ 5, 3 ], "selectedCount": 2, "title": "Choose a size", "required": false, "freeSelect": true, "label": "Extra", "options": [ { "title": "Option 1", "price": 0 }, { "title": "Option 2", "price": 3 }, { "title": "Option 3", "price": 4.5 }, { "title": "Option 4", "price": 4.5 }, { "title": "Option 5", "price": 4.5 }, { "title": "Option 6", "price": 4.5 } ] } ], "qty": 1, "totalPrice": "13.30" } ],
    order: null,
    filters: [],
    notifyMethod: {},
    menuItemExpanded: false
  },
  getters: {
  },
  mutations: {
    addToCart(state, item){
      state.cart.push(item)
    },
    updateCartItem(state, {idx, item}){
      state.cart[idx] = item
    },
    removeItemFromCart(state, idx){
      state.cart.splice(idx, 1)
    },
    setOrder(state, data){
      state.order = {
        ...data,
        items: state.cart
      }
      state.cart = []
    },
    setFilters(state, filters){
      state.filters = filters
    }
  },
  actions: {
    
  },
  modules: {
  }
})
