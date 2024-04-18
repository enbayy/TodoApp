import React from 'react'

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Todo Giriniz' />
            <button className='todo-create-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate