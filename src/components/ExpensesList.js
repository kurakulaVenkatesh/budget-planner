import React,{useContext} from 'react'
import { AppContext } from './context/AppContext'
import ExpensesItem from './ExpensesItem'

const ExpensesList = () => {
const { expenses } = useContext(AppContext)
  
   return(
    <ul className='list-group'>
       {expenses.map((expense) => (
           <ExpensesItem id={expense.id} name={expense.name} cost={expense.cost} />
       ))}
    </ul>
   )
}

export default ExpensesList