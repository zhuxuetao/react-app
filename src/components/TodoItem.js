import React ,{ Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick(){
        const { index , deleteItem } = this.props;
        deleteItem(index)
    }
    
   

    render(){
        const { content , index , text } = this.props;
        return (
            <li key={index}>{text} - {content}
                <span className="deleteBtn" 
				onClick={this.handelClick}>删除</span>
            </li>
        )
    }
}
TodoItem.propTypes = {
    text:PropTypes.string.isRequired,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    content:PropTypes.string
}
TodoItem.defaultProps = {
    text:"hello"
}
export default TodoItem;
