import React from "react";

export default class Card extends React.Component {


	// stateChange(e) {

	// 	console.log(e);
	// }

	render() {
		return (
			<div class="card">
				<input class="hello" type="checkbox" onChange={this.props.completeTask.bind(this, this.props.task)}/>
				<span>{this.props.task}</span>
				<button onClick={this.props.removeTask.bind(this, this.props.task)}>x</button>
			</div>
		);
	}
}