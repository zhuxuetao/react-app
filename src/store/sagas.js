import { takeEvery, put } from 'redux-saga/effects';
import * as types from './actionType';
import { addRequestTodoItem } from './actionCreator';
import axios from 'axios'; 
function* getInitList(){
    try{
        const res = yield axios.post('/app/json');
        const action = addRequestTodoItem(res.data.data);
        yield put(action);
    }catch(e){
        console.log("list.json网络请求失败");
    }
    
}
function* mySaga(){
    yield takeEvery(types.GET_INIT_LIST,getInitList)
}
export default mySaga;