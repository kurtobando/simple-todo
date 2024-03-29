import React from "react"
import TodoForm from "./component/TodoForm"
import TodoList from "./component/TodoList"
import TodoData from "./component/TodoData"
import TodoFooter from "./component/TodoFooter"
import TodoNotice from "./component/TodoNotice"
import "./Reset.css"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            todoFormInput: "",
            todoList: TodoData,
            istodoNoticeActive: false,
            todoNoticeText: "",
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type

        // for checkbox input tag only
        if (type === "checkbox") {
            return this.setState((prevState) => {
                // get all prevState of todoList and store object to 'listofToDoObj'
                const arrayOfTodoList = prevState.todoList.map((listofToDoObj) => {
                    // if key and name value of checkbox match, alter isCompleted
                    // parseInt used to convert 'name' (String) to interger
                    if (listofToDoObj.key === parseInt(name)) {
                        listofToDoObj.isCompleted = !listofToDoObj.isCompleted // invert boolean value
                    }

                    // return object to the new array
                    return listofToDoObj
                })

                // update the new state of todoList
                return {
                    todoList: arrayOfTodoList,
                }
            })
        }

        // for text input tags
        return this.setState({
            [name]: value,
        })
    }

    onSubmit(event) {
        event.preventDefault()

        this.renderNotice("Todo has been successfully added")

        this.setState((prevState) => {
            const tempTodoList = prevState.todoList
            const newTodoKey = tempTodoList.length + 1

            tempTodoList.push({
                key: newTodoKey,
                text: this.state.todoFormInput,
                isCompleted: false,
            })

            return {
                todoList: tempTodoList,
            }
        })

        // clear the input in todo form
        this.setState({
            todoFormInput: "",
        })
    }

    onClick(event) {
        this.renderNotice("Todo has been successfully deleted")

        const id = event.target.id

        return this.setState((prevState) => {
            const arrayOfTodoList = prevState.todoList.filter((listofToDoObj) => {
                // if id and object are not equal, do not remove object yet
                if (parseInt(id) !== listofToDoObj.key) {
                    return listofToDoObj
                }

                // otherwise return empty
                return false
            })

            // update the new state of todoList
            return {
                todoList: arrayOfTodoList,
            }
        })
    }

    renderNotice = (text) => {
        this.setState({
            istodoNoticeActive: true,
            todoNoticeText: text,
        })

        setTimeout(() => {
            return this.setState({
                istodoNoticeActive: false,
                todoNoticeText: "",
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <TodoNotice
                    istodoNoticeActive={this.state.istodoNoticeActive}
                    todoNoticeText={this.state.todoNoticeText}
                />

                <div className="TodoApp">
                    <TodoForm onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.todoFormInput} />
                    <TodoList todoList={this.state.todoList} onChange={this.onChange} onClick={this.onClick} />
                </div>

                <TodoFooter />
            </div>
        )
    }
}

export default App
