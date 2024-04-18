import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='App'>
      <div className='todoApp'>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App