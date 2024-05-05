import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setnewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }
    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input style={{ width: '380px' }} value={newTodo} onChange={(e) => setnewTodo(e.target.value)} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
                }



            </div>
        </div>
    )
}

export default Todo