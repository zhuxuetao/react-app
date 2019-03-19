import React,{Component} from 'react';


export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        }

        this.tapFn = this.tapFn.bind(this);
    }

    tapFn(){
        this.setState({
            show:this.state.show ? false : true
        })
    }
    render(){
        const msg = [
            {value:"列表1"},
            {value:"列表2"},
            {value:"列表3"}
        ]
        
        return (
            <div>
                <ul>
                    {
                        msg.map((item,index) => (
                            <li key={index}>{item.value}</li>
                        ))
                    }
                </ul>
                <h3 className={this.state.show ? "show" : "hide"}>hello</h3>
                <button onClick={this.tapFn}>按钮</button>
            </div>
        )
    }
}