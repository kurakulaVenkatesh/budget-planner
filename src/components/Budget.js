import React,{useContext} from 'react'
import { AppContext } from './context/AppContext'

const Budget = () => {
    const {Budget} = useContext(AppContext)
  return (
    <div className='alert alert-secondary'>
    <span>
        Budget : ${Budget}
    </span>
    </div>
  )
}

export default Budget