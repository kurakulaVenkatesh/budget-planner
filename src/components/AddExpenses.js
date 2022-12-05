
import React ,{useState,useContext} from 'react'
import { AppContext } from './context/AppContext'
import {v4 as uuidv4} from 'uuid'
const AddExpenses = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit =(Event)=>{
        Event.preventDefault();
        const expense = {
            id: uuidv4(),
            name:name,
            cost : parseInt(cost)
        }
        dispatch({
            type: 'ADD-EXPENSE',
            payload:expense
        })
        setName('')
        setCost('')
    }
  return (
    <form >
        <div>
            <div className='col-sm'>
               <label for ='name'>name</label>
               <input required='required' type='text' className='form-control' id='name'
               value={name} onChange ={(Event)=>setName(Event.target.value)}></input>
            </div>
            <div className='col-sm'>
            <label for ='cost'>cost</label>
               <input required='required' type='text' className='form-control' id='cost'
               value={cost} onChange ={(Event)=>setCost(Event.target.value)}></input>
            </div>
            <div className='col-sm'>
                <button type='button'className='btn btn-primary' onClick={onSubmit}>Save</button>
            </div>
        </div>
    </form>
  )
}

export default AddExpenses