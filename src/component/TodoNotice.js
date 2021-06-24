import React from "react"

function TodoNotice(props) {
    const style = props.istodoNoticeActive ? { display: "block " } : { display: "none" }
    const text = props.todoNoticeText

    return (
        <div className="TodoApp__notice" style={style}>
            {text}
        </div>
    )
}

export default TodoNotice
