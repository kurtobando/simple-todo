import React from 'react'



class ToDoItem extends React.Component {

	render() {
		const key 			= this.props.listofToDoObj.key
		const label 		= this.props.listofToDoObj.text
		const isCompleted 	= this.props.listofToDoObj.isCompleted
		const onChange 		= this.props.onChange
		const onClick 		= this.props.onClick
		const style			= isCompleted? { textDecoration : "line-through" } : null
		
		return(
			<li key={ key } >
				<label style={ style } >
					<input 
						type="checkbox" 
						checked={ isCompleted } 
						onChange={ onChange }
						name={ key }
					/>
					{ label }
				</label>
				<button 
					onClick={ onClick } 
					id={ key }> X
				</button>
			</li>
		)
	}
}



export default ToDoItem