import { useState } from 'react'
import './App.css'
import Items from './component/Items'
import TodoAddItem from './component/TodoAddItem'
import TodoAppName from './component/TodoAppName'
import ErrorMsg from './component/ErrorMsg'
import { TodoItemsStore } from './strore/Todo-Item_store'
const App = () => {
  
let [newTodoItemAdded,setnewTodoItemAdded] = useState([])
let newAddedItems = (ItemNameValue,ItemDateValue) =>{
     setnewTodoItemAdded(CurrentValue => [...CurrentValue,{Name: ItemNameValue, duedate: ItemDateValue}])
}
 let clickTodeletItem = (todoName) =>{
     let newItemDelet = newTodoItemAdded.filter(item => item.Name !== todoName)
     setnewTodoItemAdded(newItemDelet)
 }

  return (
    <TodoItemsStore.Provider value={{
      newTodoItemAdded,
      newAddedItems,
      clickTodeletItem
      }}>
    <div className="main-container">
        <TodoAppName />
        <TodoAddItem/>
        <ErrorMsg />
        <Items/>
    </div>
    </TodoItemsStore.Provider>
  )
}

export default App
