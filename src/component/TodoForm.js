import React from "react"

function TodoForm(props) {
    const onchange = props.onChange
    const onsubmit = props.onSubmit
    const value = props.value
    const isDisabled = value.length === 0 ? true : false

    return (
        <form className="TodoApp__form" onSubmit={onsubmit}>
            <input
                type="text"
                placeholder="e.g Create TodoApp"
                name="todoFormInput"
                onChange={onchange}
                value={value}
            />
            <button type="submit" disabled={isDisabled}>
                Add
            </button>
        </form>
    )
}

export default TodoForm
