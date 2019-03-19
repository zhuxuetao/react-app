import * as types from './actionType'
import axios from 'axios';
export const getInputChangeAction = (value) => ({
    type:types.CHNAGE_INPUT_VALUE,
    value
})
export const getAddTodoItem = () => ({
    type:types.ADD_TODO_ITEM
})
export const getDeleteTodoItem = (index) => ({
    type:types.DELETE_TODO_ITEM,
    index
})
export const addRequestTodoItem = (list) => ({
    type:types.ADD_REQUEST_LIST_ITEM,
    list
})
// thunk 方式
// export const addTodoList = () => {
//     return (dispatch) => {
//         axios.post('/app/json').then((response) => {
// 			const action = addRequestTodoItem(response.data.data);
// 			dispatch(action);
// 		})
//     }
// }

export const getInitList = () => ({
    type:types.GET_INIT_LIST
})