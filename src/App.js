import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField:""
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
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className="App">
				<input type="search" placeholder="Search Monster" 
				onChange={ e => this.setState({
						searchField:e.target.value
					})
				}/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
export default App;