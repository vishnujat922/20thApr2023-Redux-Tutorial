console.log('Hello');
const { legacy_createStore } = require('redux')

const ADD = "ADD"

const SUBSTRACT = "SUBSTRACT"


// 1. lets Create Action
const action = {
    value :1
}
//2. Action Creator

const addValueby1=()=>{
    return {
        type:ADD,
        payload:action
    }
}
const substractValueby1=()=>{
    return {
        type:SUBSTRACT,
        payload:action
    }
}

//3. lets Create rootReducer
const initialstate = {
                value:0
            }
const rootReducer=(state=initialstate, action)=>{
    switch(action.type){
        case ADD:
            return {
                ...state,
                value:state.value + action.payload.value
            }
        case SUBSTRACT:
            return {
                ...state,
                value:state.value - action.payload.value
            }
        default:
            return state        
    }
}

//4. lets create Store
const store = legacy_createStore(rootReducer)

console.log('store------>', store.getState())

console.log(store.dispatch(addValueby1()))
console.log(store.dispatch(addValueby1()))
console.log(store.dispatch(addValueby1()))
console.log(store.dispatch(addValueby1()))
console.log(store.dispatch(addValueby1()))

console.log('store------>', store.getState())

console.log(store.dispatch(substractValueby1()))
console.log(store.dispatch(substractValueby1()))
console.log(store.dispatch(substractValueby1()))

console.log('store------>', store.getState())