import React, { Component } from 'react';

class Participant extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({name: event.target.value})
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.name);
	    this.props.participantList.push(this.state.name);
	    console.log(this.props.participantList);
	    event.preventDefault();
  	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name: 
					<input 
						type = "text"
						name = {this.state.name} 
						onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Participant;