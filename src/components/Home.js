import React, { Component } from "react";
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import "../common/css/index.css"

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routeMsgList: [
				{
					path: "/list"
				},
				{
					path: "/TodoList"
				}
			]
		}
	}
	render() {
		const {routeMsgList} = this.state; 
		return (
			<div>
				{
					routeMsgList.map((item,index) => (
						<Link  to={item.path} key={index}>
							<h1>{item.path}</h1>
						</Link>
					))
				}
			</div>
		)
	}
}