import React from 'react';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
    return (
        <div style={{ margin: "10px" }}>
            <Input
                value={props.inputValue}
                onChange={props.handelChange}
                style={{ width: "300px", marginRight: "10px" }} 
            />
            <Button onClick={props.handelAddClick} type="primary">提交</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
                style={{ width: "300px", marginTop: "20px" }}
            />
        </div>
    )
}

export default TodoListUI;