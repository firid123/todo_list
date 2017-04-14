import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			tasks: ["Sample Task 1", "Sample Task 2", "Sample Task 3"]
		};
	}

	addTask() {
		var input = document.getElementById("input");
		var value = input.value;
		if(!value) {
			alert("Please input a task");
			return;
		}

		var prevTasks = this.state.tasks; 
		if(prevTasks.indexOf(value) === -1) {		
			prevTasks.unshift(value);
			this.setState(
				{
					tasks: prevTasks
				}
			);
		input.value = "";
		} else {
			window.alert("Task already present");
			return;
		}
	}


	removeTask(task) {
		var index = this.state.tasks.indexOf(task);
	    this.setState(function(prevState){
		    return { tasks : prevState.tasks.filter(function(val, i) {
		      return i !== index;
	    	})};
	    });
	}

	completeTask(task) {
		var arrLength = document.getElementsByClassName('card').length;
		for(var i=0; i<arrLength; i++) {
			var item = document.getElementsByClassName('card')[i];
			var checkBox = item.children[0];
			var fetchedTask = item.children[1].innerHTML;
			if(fetchedTask == task) {
				if(checkBox.checked) {
					item.classList.add("completed-card");					
				} else {
					item.classList.remove("completed-card");
				}
			}
		};
	}

	render() {
		return (
			<div>
				<Header />
				<input id="input"/>
				<button onClick={this.addTask.bind(this, )}>Add Element</button>
				<div id="tasks">
				{
					this.state.tasks.map((task)=> (<Card task={task} removeTask={this.removeTask.bind(this)} completeTask={this.completeTask.bind(this)}/>))
				}
				</div>
				
				
				<Footer/>
			</div>
		);
	}
}