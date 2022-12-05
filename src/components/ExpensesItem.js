import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from './context/AppContext'
const ExpensesItem = (props) => {
const {dispatch} = useContext(AppContext)
 const handleDeleteExpenses = () =>{
    dispatch({
    type:'DELETE-EXPENSES',
    payload: props.id,
    })
 }
  return (

    
    <li className='list-group-item d-flex justify-content-between align-items-center'>
           {props.name}
           <div>
            <span className='badge-primary mr-3'>
                ${props.cost}
            </span>
            <TiDelete size='1.5em' onClick={handleDeleteExpenses}></TiDelete>

           </div>
    </li>
  )
}

export default ExpensesItem