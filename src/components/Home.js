// jshint esversion: 6
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expenses: [],
			month: null,
			budget: null,
			viewBy: 'month',
		};
		// this.handleViewChange = this.handleViewChange.bind(this);
		// this.handleMonthChange = this.handleMonthChange.bind(this);
		// this.handleAddExpense = this.handleAddExpense.bind(this);
	}

	viewChange(viewBy) {
		this.setState({
			viewBy
		});
	}

	monthChange(month) {
		this.setState({
			month
		});
	}

	addExpense(expense) {
		this.setState({
			expenses: [...this.state.expenses, expense]
		});
	}

	fetchExpenses() {
		let expenses;
		return expenses; 
	}

	componentDidMount() {
		this.setState({
			expenses: [
			{
				date: 5,
				name: 'starbucks',
				amount: 5.50
			},
			{
				date: 12,
				name: 'dinner',
				amount: 12
			},
			{
				date: 30,
				name: 'lunch',
				amount: 11
			}],
			budget: 750,
			viewBy: 'month',

		});
	}

	render() {
		return (
			<div className="home">
				<button className="logout-button" onClick={this.props.handleLogout}>Logout</button>
				{/* <ViewFilter 
					handleViewChange={this.viewChange} 
				/>
				<CalendarContainer 
					expenses={this.state.expenses}
					budget={this.state.budget}
					viewBy={this.state.viewBy}
				/>
				<AddExpense 
					day={this.state.selectedDate}
					handleAddExpense={this.addExpense}
				/>
				<Summary 
					budget={this.state.budget}
					expenses={this.state.expenses}
				/> */}
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired

}
