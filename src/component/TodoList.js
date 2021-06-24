import React from "react"
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
    render() {
        let renderTodoList

        // render earch object inside the todoList array
        renderTodoList = this.props.todoList
            .sort((firstTodo, secondTodo) => {
                return firstTodo.isCompleted - secondTodo.isCompleted
            })
            .map((listofToDoObj) => {
                return (
                    <TodoItem
                        listofToDoObj={listofToDoObj}
                        key={listofToDoObj.key}
                        onChange={this.props.onChange}
                        onClick={this.props.onClick}
                    />
                )
            })

        if (this.props.todoList.length === 0) {
            renderTodoList = <span class="No_Todo_Yet">No to-do added yet</span>
        }
        // render all <li> tags inside the renderTodoList array
        return <ul className="TodoApp__list">{renderTodoList}</ul>
    }
}

export default TodoList
