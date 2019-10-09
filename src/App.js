import React from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'
import TodoData from './component/TodoData'
import './Reset.css';
import './App.css';

class App extends React.Component {
	
	constructor() {
		super()
		
		this.state = {
			todoFormInput : "",
			todoList : TodoData
		}
		
		this.eventOnChange 	= this.eventOnChange.bind( this )
		this.eventOnSubmit 	= this.eventOnSubmit.bind( this )
		this.onClick 		= this.onClick.bind( this )
	}
	
	
	
	eventOnChange( event ) {
		
		const name 		= event.target.name
		const value 	= event.target.value
		const type 		= event.target.type
		
		// for checkbox input tag only
		if( type === 'checkbox' ) {
			return this.setState(( prevState ) => {
				
				// get all prevState of todoList and store object to 'listofToDoObj'
				let arrayOfTodoList = prevState.todoList.map(( listofToDoObj ) => {
						
					// if key and name value of checkbox match, alter isCompleted
					// parseInt used to convert 'name' (String) to interger
					if( listofToDoObj.key === parseInt( name ) ) {
						listofToDoObj.isCompleted = !listofToDoObj.isCompleted // invert boolean value
					}
					
					// return object to the new array
					return listofToDoObj  
				})
				
				// update the new state of todoList
				return {
					todoList : arrayOfTodoList
				}
			})
		}
		
		// for text input tags
		return this.setState({
			[ name ] : value
		})
	}
	
	
	
	
	eventOnSubmit( event ) {
		
		event.preventDefault()

		this.setState(( prevState ) => {
			
			let arrayOfTodoList = prevState.todoList
			let lastTodoList 	= arrayOfTodoList[ arrayOfTodoList.length - 1 ] // get the last item in array
			let lastTodoListKey = lastTodoList === undefined ? 0 : lastTodoList.key // get the last key
			
			// add new todo object to array of todos
			arrayOfTodoList.push({
				key 		: lastTodoListKey + 1,
				text 		: this.state.todoFormInput,
				isCompleted	: false
			})
			
			// update the new state of todoList
			return {
				todoList : arrayOfTodoList
			}
		})
		
		// clear the input in todo form
		this.setState({
			todoFormInput : ""
		})
	}
	
	
	
	onClick( event ) {
		
		let id = event.target.id 
		
		return this.setState(( prevState ) => {
			let arrayOfTodoList = prevState.todoList.filter(( listofToDoObj ) => {
				
				// if id and object are not equal, do not remove object yet
				if ( parseInt( id ) !== listofToDoObj.key ) {
					return listofToDoObj
				}
				
				// otherwise return empty
				return false
			})
			
			// update the new state of todoList
			return {
				todoList : arrayOfTodoList
			}
		})
	}
	
	
	
	render() {
		return (
			<div className="TodoApp">
				<TodoForm 
					onSubmit={ this.eventOnSubmit } 
					onChange={ this.eventOnChange } 
					value={ this.state.todoFormInput }
				/>
				<TodoList 
					todoList={ this.state.todoList }
					onChange={ this.eventOnChange }
					onClick={ this.onClick }
				/>
			</div>
		)
	}
}



export default App;