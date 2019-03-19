import * as types from './actionType'
const defaultState = {
    inputValue: "zhangfan",
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === types.CHNAGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === types.ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState; 
    }
    if(action.type === types.DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === types.ADD_REQUEST_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}