// jshint esversion: 6

import React, { Component } from 'react';
// import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';


class App extends Component {
	constructor() {
		super();

		this.state = {
			user: null,
		};
		this.userLogin = this.userLogin.bind(this);
		this.userLogout = this.userLogout.bind(this);
	}

	userLogout() {
		alert('logging out');
		this.setState({
			user: null
		});
	}

	userLogin(user) {
		alert('logging in');
		this.setState({
			user
		});
	}

	render() {
		return (
			<div className="App">
				{(this.state.user)
					?
					<Home 
					user={this.state.user}
					handleLogout={this.userLogout} 
					/>
					:
					<Login 
					handleLogin={this.userLogin} 
					/>
				}
			</div>
		);
	}
}

export default App;
