import { createContext,useReducer } from "react"

const AppReducer = (state,action)=>{
 switch (action.type){
    case 'ADD-EXPENSE':
      return {
        ...state,
        expenses:[...state.expenses,action.payload],
      }
      case 'DELETE-EXPENSES':
      return {
        ...state,
     expenses: state.expenses.filter((expens)=>expens.id !== action.payload),
      }
    default:
        return state;
 }
}

const initialstate = {
    Budget : 20000,
    expenses : [
        {id:12, name:'shoping',cost:50},
        {id:13, name:'Holiday',cost:40},
        {id:14, name:'fuel',cost:60},
    ],
}

 export const AppContext = createContext();

 export const AppProvider=(props)=>{
   const [state, dispatch] = useReducer(AppReducer, initialstate)

   return(
    <AppContext.Provider
     value={{
    Budget :state.Budget,
    expenses:state.expenses,
    dispatch,
}}
    >

    {props.children}
   </AppContext.Provider>
   )
 }