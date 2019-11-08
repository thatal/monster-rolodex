import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: []
		}
	}
	// life cycle
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>response.json())
				.then(users => this.setState({
					monsters:users
				}))
	}
	// end of life cycle
	render() {
		return (
			<div className="App">
				<CardList monsters={this.state.monsters} />
			</div>
		);
	}
}
export default App;