import React, { useContext } from 'react'
import TodoOneOneItem from './TodoOneOneItem'
import { TodoItemsStore } from '../strore/Todo-Item_store'
const Items = () => {
  const {clickTodeletItem} = useContext(TodoItemsStore)

  const {newTodoItemAdded} = useContext(TodoItemsStore)
  return (
    <div>
      {newTodoItemAdded.map(item => <TodoOneOneItem key={item =[item.Name,item.duedate]} todoName={item.Name} todoDate={item.duedate} clickTodeletItem={clickTodeletItem}/>)}
    </div>
  )
}

export default Items
