import React, { useContext } from 'react'
import { TodoItemsStore } from '../strore/Todo-Item_store'

const ErrorMsg = () => {
  const {newTodoItemAdded} = useContext(TodoItemsStore)
  return (
    <div>
      {newTodoItemAdded.length === 0 ? <h1 className='todo-app-name' style={{marginTop: '20px'}}>Please Enter Any Item</h1>: null}
    </div>
  )
}

export default ErrorMsg
