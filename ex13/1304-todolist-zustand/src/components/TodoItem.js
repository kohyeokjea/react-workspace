import React, { useState } from 'react'
import "../assets/css/TodoItem.css"
import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/delete.svg";
import useTodoStore from '../hooks/useTodoStore';

function TodoItem({ id, done, text }) {

    const { toggleTodo, removeTodo } = useTodoStore();

    const onToggle = () => toggleTodo(id);
    const onRemove = () => removeTodo(id);

    const [hoveredDelete, setHoveredDelete] = useState(false);
    return (
        <div className="todo-item-block">
            <div className='item' onClick={onToggle}>
                <div className={`check-circle ${done ? "done" : ""}`}>
                    {
                        done && <CheckIcon fill='#38d9a9' />
                    }
                </div>
                <div className={`text ${done && "done"}`}>{text}</div>
            </div>
            <div className='remove' onClick={onRemove}>
                <DeleteIcon
                    onMouseEnter={() => setHoveredDelete(true)}
                    onMouseLeave={() => setHoveredDelete(false)}
                    fill={hoveredDelete ? "#ff6b6b" : "#dee2e5"} />
            </div>
        </div>
    )
}

export default TodoItem