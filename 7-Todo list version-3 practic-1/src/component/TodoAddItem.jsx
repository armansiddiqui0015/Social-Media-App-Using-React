import React, { useContext } from 'react'
import {useRef} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsStore } from '../strore/Todo-Item_store';

const TodoAddItem = () => {
  const {newAddedItems} = useContext(TodoItemsStore)

  const setItemNameContaint = useRef();
  const setItemDateContaint = useRef();
  let handleClickToAddItem = (event) =>{
    event.preventDefault()
    const ItemNameValue = setItemNameContaint.current.value
    const ItemDateValue = setItemDateContaint.current.value
    setItemNameContaint.current.value= ''
    setItemDateContaint.current.value = ''
    newAddedItems(ItemNameValue,ItemDateValue)
  }

  return (
    <div className='TodoAddItem-container'>
      <div className="container text-center">
  <form className="row" onSubmit={handleClickToAddItem}>
    <div className="col-6">
      <input type="text" placeholder='Enter Todo Here' ref={setItemNameContaint} style={{ padding:'5px',borderRadius: '5px'}}/>
    </div>
    <div className="col-4">
      <input type="date" ref={setItemDateContaint} style={{ padding:'5px',borderRadius: '5px'}}/>
    </div>
    <div className="col-2">
    <button type="submit" className="btn btn-success" style={{float: 'left'}}><IoIosAddCircle /></button>
    </div>
  </form>
</div>
    </div>
  )
}

export default TodoAddItem
