import React, { Component, Fragment } from 'react';


import * as types from '../store/actionCreator';
import store from '../store'
import TodoListUI from './TodoListUI';
import "antd/dist/antd.css";



export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		
		this.handelRemoveClick = this.handelRemoveClick.bind(this);
		this.handelChange = this.handelChange.bind(this);
		this.handelAddClick = this.handelAddClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handelStoreChange = this.handelStoreChange.bind(this)

		//订阅
		store.subscribe(this.handelStoreChange);
	}

	componentDidMount() {
		// thunk 方式
		// const action = types.addTodoList();
		// store.dispatch(action);


		const action = types.getInitList();
		store.dispatch(action);
	}

	handelStoreChange(){
		this.setState(store.getState());
	}

	render() {
		return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                handelChange={this.handelChange}
                handelAddClick={this.handelAddClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    
    handleItemDelete(index){
        const action = types.getDeleteTodoItem(index);
        store.dispatch(action);
    }

	handelChange(e) {
        const action = types.getInputChangeAction(e.target.value);
		store.dispatch(action)
	}

	handelAddClick() {
        const action = types.getAddTodoItem();
		store.dispatch(action);
	}

	handelRemoveClick(index) {
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {
				list
			}
		})
	}
}