import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const ExpensisTotal = () => {
    const {expenses} =useContext(AppContext)

    const  totalExpenses = expenses.reduce((total,item)=>{
         return (total += item.cost);  
    },0)
  
  return (
 
    <div className='alert alert-success'>
        <span>
            spent so far : ${totalExpenses}
        </span>
    </div>
  )
}

export default ExpensisTotal