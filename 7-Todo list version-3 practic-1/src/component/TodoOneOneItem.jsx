import React from 'react'
import { MdDelete } from "react-icons/md";

const TodoOneOneItem = ({todoName,todoDate,clickTodeletItem}) => {
  return (
    <div>
        <div className="container text-center" style={{marginTop: '15px'}}>
  <div className="row">
    <div className="col-6" style={{textAlign: 'left', background: 'white', padding:'5px',borderRadius: '5px', width: '48%', marginLeft: '12px',height: '40px'} }>
      {todoName}
    </div>
    <div className="col-4" style={{textAlign: 'left', background: 'white', padding:'5px',borderRadius: '5px',marginLeft: '25px', width: '31.5%'}}>
    {todoDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger" style={{float: 'left'}} onClick={() => clickTodeletItem(todoName)}><MdDelete /></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default TodoOneOneItem
